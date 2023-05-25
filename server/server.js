const express = require('express');
const cors = require('cors');
const axios = require("axios");
require('dotenv').config();
const path = require('path');
const db = require('./db/db-connection.js');

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
const REACT_BUILD_DIR = path.join(__dirname, "..", "client", "dist");
app.use(express.static(REACT_BUILD_DIR));
app.use(express.json());
const fetch = require("node-fetch");


//creates an endpoint for the route "/""
app.get('/', (req, res) => {
  res.sendFile(path.join(REACT_BUILD_DIR, "index.html"));
});

//calls the pokeapi for a list of pokemon
app.get('/api/pokemonlist', cors(), async (req, res) => {
  try {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((pokemonListResponse) => {
        res.send(pokemonListResponse.results);
      });
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//get request for users in the endpoint '/api/user'
app.get('/api/user', cors(), async (req, res) => {
  try {
    const { rows: users } = await db.query("SELECT * FROM users");
    res.send(users);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//post request for user in the endpoint '/api/user'
app.post('/api/user', async (req, res) => {
  try {
    const userAccount = req.body.user;
    const queryResult = await db.query("SELECT * from users where email = $1", [userAccount.email,])
    if (queryResult.rows.length === 0) {
      const newUser = {
        username: req.body.user.name,
        email: req.body.user.email,
      };
      const result = await db.query("INSERT INTO users(username, email) VALUES ($1,$2) RETURNING *",
        [newUser.username, newUser.email]
      );
    } else {
      let result = queryResult
    }
    res.json(result.rows[0]);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//get request for user favorites in the endpoint '/api/user/favorites/:email'
app.get("/api/user/favorites/:email", cors(), async (req, res) => {
  try {
    const { email } = req.params;
    const { rows: favorites } = await db.query("SELECT pokecode FROM favorites JOIN users ON favorites.userid = users.id WHERE email = $1",
      [email]);
    res.send(favorites);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//post request for user favorite in the endpoint '/api/addFavorite/:pokecode/:email'
app.post('/api/addFavorite/:pokecode/:email', async (req, res) => {
  try {
    const newFavorite = { pokecode: req.params.pokecode };
    const { email } = req.params;
    const { rows: users } = await db.query("SELECT * FROM users WHERE email = $1", [email]);
    const userId = users[0].id
    const result = await db.query("INSERT INTO favorites(pokecode, userId) VALUES ($1, $2) RETURNING *",
      [newFavorite.pokecode, userId],
    );
    res.json(result.rows[0]);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//get request to make sure that our index.html file renders
app.get('*', (req, res) => {
  res.sendFile(path.join(REACT_BUILD_DIR,
    'index.html'))
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Hola, Server listening on ${PORT}`);
});