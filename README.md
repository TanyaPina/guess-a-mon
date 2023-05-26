# Guess-a-Mon
 ⚡ You can catch 'em all, but can you guess 'em all? ⚡

## Contents
<ul>
 <li>About</li>
 <li>Instructions</li>
 <li>Mock User</li>
 <li>API Reference</li>
 <li>Technologies Used</li>
 <li>Installation</li>
 <li>Contact Me</li>
</ul>

## About

Guess-a-Mon is a quiz game that provides a way for the nostalgic anime fan to test themself on their Pokémon knowledge. Are you up to the challenge?
[Live Project Page Link](https://server-stus.onrender.com/)

## Instructions

To play, the user must first log in. After they are logged in, they are greeted with a concealed pokemon image and four pokemon to choose from. If they select the right pokemon, the user can then favorite that pokemon and add it to their favorites collection. If the user selects the wrong pokemon, the user has the option to shuffle the concealed pokemon and try again. 

## Mock User

Want to try it out? Here is a mock user that can be used to log in to the game:

<ul>
 <li> username: ashketchumall</li>
 <li> password: Gottaguessemall97!</li>
</ul>

## API Reference
<ul>
 <li><a href="https://pokeapi.co/">PokéAPI</a></li>
 <li><a href="https://auth0.com/docs">Auth0 Authentication</a></li>
</ul>

## Technologies Used
<table align="center">
  <tr>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168923681-ece848fc-5700-430b-957f-e8de784e9847.png" width="48" height="48" alt="html" />
      <br>html
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168924521-589f95da-069a-496a-bcc1-ee6dd132ff12.png" width="48" height="48" alt="CSS" />
      <br>CSS
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168977094-6a5073a2-2f48-4f5a-ae0e-ed1421a678c6.png" width="48" height="48" alt="JavaScript" />
      <br>JavaScript
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168976819-15a1f4e0-29cf-4ac0-94a7-1f15eee374a1.png" width="48" height="48" alt="postgreSQL" />
      <br>postgreSQL
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168978951-5ac2af5e-c911-4e59-b493-683071cf1860.png" width="48" height="48" alt="Express" />
      <br>Express
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979311-4a486cad-32c8-46f4-a5da-912fdc51b2d6.png" width="48" height="48" alt="React" />
      <br>React
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979848-733f7090-0f78-401a-9ceb-4267231abef7.png" width="48" height="48" alt="Node" />
      <br>Node
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168980647-1690f9de-bf0e-4318-93cb-1b2ba3701ded.png" width="48" height="48" alt="Bootstrap" />
      <br>Bootstrap
    </td>
    <td align="center" width="96">
        <img src="https://pbs.twimg.com/profile_images/1337188620222906368/oNKK_fVe_400x400.jpg" width="48" height="48" alt="Render" />
      <br>Render
    </td>
  </tr>
</table>

## Installation

Step 1. Go to the source directory in your terminal to clone this project. Once that is done, switch into the project directory.
```bash
 git clone https://github.com/TanyaPina/guess-a-mon.git
 cd guess-a-mon
```

Step 2. To remove the owner git track from the project's main directory, run the command `rm -rf .git`. Then run the command `git init` to start your own git track.
```bash
 rm -rf .git
 git init
```

Step 3. Switch into the server folder with the command `cd server` and install npm with the command `npm install`.
```bash
 cd server
 npm install
```

Step 4. Inside your server folder, create an .env file with the command `touch .env`. Copy the instructions in the .env.example files to copy the correct option for your configuation into the new .env file. 
```bash
 touch .env
```

Step 5. Staying inside of the server folder, run either option A or option B:
<ul>
 <li>A. The command `psql -U postgres -f db.sql` if your postgres is set-up with a user and password</li>
 <li>B. The command `psql -f db.sql` if your postgres is not set-up with a user and password</li>
</ul>

Here is what your command might look like:

```bash
 psql postgres -f db.sql
```
Step 6. Go to the client folder in the project with the command `cd ..` and `cd client`. Then run the command `npm install` in that client folder.
```bash
 cd .. 
 cd client
 npm install
```

Step 7: Run both servers by opening a new terminal and by switching over to the server folder with the command `cd server`in it. Then run the command `npm run dev` inside the new terminal. 
```bash
 cd server
 npm run dev
```
## Contact Me

Thank you for stopping by, I hope that you had fun! Feel free to reach out to me on [LinkedIn](https://www.linkedin.com/in/tanyapina) for any comments or questions. 
