# Guess-a-Mon
 ⚡ You can catch 'em all, but can you guess 'em all? ⚡

## Contents
<ul>
 <li>About</li>
 <li>API Reference</li>
 <li>Installation</li>
</ul>

## About

Guess-a-Mon provides a way for the nostalgic anime fan to test themself on their Pokémon knowledge. Are you up to the challenge?

## API Reference
<ul>
 <li><a href="https://pokeapi.co/">PokéAPI</a></li>
 <li><a href="https://auth0.com/docs">Auth0 Authentication</a></li>
</ul>

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
