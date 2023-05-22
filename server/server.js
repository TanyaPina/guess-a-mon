const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const db = require('./db/db-connection.js');

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
const REACT_BUILD_DIR = path.join(__dirname, "..", "client","dist");
app.use(express.static(REACT_BUILD_DIR));
app.use(express.json());

// creates an endpoint for the route "/""
app.get('/', (req, res) => {
    res.sendFile(path.join(REACT_BUILD_DIR, "index.html"));
});

app.get('/api/user', cors (), async (req, res) => {
    try {
        const { rows: users } = await db.query("SELECT * FROM users");
      res.send(users);
      console.log("line23server")
    } catch (e) {
      return res.status(400).json({ e });
    }
  });

// create the post request for users in the endpoint '/api/users'
app.post('/api/user', async (req, res) => {
    try {
        const userAccount = req.body.user;
        const userEmail = await db.query("SELECT * from users where email = $1", [userAccount.email,])
        if (userEmail.rows.length === 0){
            const newUser = {
                username : req.body.user.name,
                email: req.body.user.email,
            };
            const result = await db.query("INSERT INTO users(username, email) VALUES ($1,$2) RETURNING *",
            [newUser.username, newUser.email]
          );
        }
        console.log("line34", result.rows[0]);
        res.json(result.rows[0]);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

app.get("/api/user/favorites/:email", cors() , async (req, res) => {
  try {
    const { email }  = req.params;
    const { rows: favorites } = await db.query("SELECT * FK_USERS_FAVORITES FROM favorites f JOIN users u ON u.id = f.id WHERE email = $1",);
    res.send(favorites);
    console.log("line55server")
  } catch (e) {
    return res.status(400).json({ e });
  }
});

app.post('/api/addFavorite/:pokecode', async (req, res) => {
  try {
      const newFavorite = {id: req.params.id};
      const result = await db.query("INSERT INTO favorites(pokecode) VALUES ($1) RETURNING *",
          [newFavorite.pokecode],
        );
      console.log("line67", result.rows[0]);
      res.json(result.rows[0]);
  } catch (e) {
      return res.status(400).json({ e });
  }
});

//create the get request for students in the endpoint '/api/students'
app.get('/api/students', async (req, res) => {
    try {
        const { rows: students } = await db.query('SELECT * FROM students');
        res.send(students);
    } catch (e) {
        return res.status(400).json({ e });
    }
});



// create the POST request
app.post('/api/students', async (req, res) => {
    try {
        const newStudent = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            is_current: req.body.is_current
        };
        //console.log([newStudent.firstname, newStudent.lastname, newStudent.iscurrent]);
        const result = await db.query(
            'INSERT INTO students(firstname, lastname, is_current) VALUES($1, $2, $3) RETURNING *',
            [newStudent.firstname, newStudent.lastname, newStudent.is_current],
        );
        console.log(result.rows[0]);
        res.json(result.rows[0]);

    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }

});

// delete request for students
app.delete('/api/students/:studentId', async (req, res) => {
    try {
        const studentId = req.params.studentId;
        await db.query('DELETE FROM students WHERE id=$1', [studentId]);
        console.log("From the delete request-url", studentId);
        res.status(200).end();
    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });

    }
});

//A put request - Update a student 
app.put('/api/students/:studentId', async (req, res) =>{
    //console.log(req.params);
    //This will be the id that I want to find in the DB - the student to be updated
    const studentId = req.params.studentId
    const updatedStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname, is_current: req.body.is_current}
    console.log("In the server from the url - the student id", studentId);
    console.log("In the server, from the react - the student to be edited", updatedStudent);
    // UPDATE students SET lastname = "something" WHERE id="16";
    const query = `UPDATE students SET firstname=$1, lastname=$2, is_current=$3 WHERE id=${studentId} RETURNING *`;
    const values = [updatedStudent.firstname, updatedStudent.lastname, updatedStudent.is_current];
    try {
      const updated = await db.query(query, values);
      console.log(updated.rows[0]);
      res.send(updated.rows[0]);
  
    }catch(e){
      console.log(e);
      return res.status(400).json({e})
    }
  })

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Hola, Server listening on ${PORT}`);
});