#### LABHAT presents:
# Crate

Crate, by LABHAT, is an updated version of an existing repo created by Turing School of Software and Design.  You can find the original repo [here](https://github.com/atulmy/crate), with a more robust description as to what the core repo is.

Our additions lay the groundwork to helping the user understand their personal style, and start receiving more personalized creates.

## Setup and Running
- Prerequisites
- Node installation:
  - Open the Terminal app and type brew update. This updates Homebrew with a list of the latest version of Node.
  - **Type `brew install node`.
  - **Type `brew update`.
  - **Type `brew update node`.

- Postgres installation:
  - Follow the instructions here: [https://postgresapp.com/](https://postgresapp.com/)
- Add the following to your .bash_profile or (.zshrc if using zsh):
  ```
  export PATH="/Applications/Postgres.app/Contents/Versions/<your postgresql verson i.e. 12.3>/bin:$PATH"
  ```
- Close or reload your terminal window
- Type `which psql` in your terminal you should see the following output:
```
  /Applications/Postgres.app/Contents/Versions/latest/bin/psql
```
- Type `psql` in your terminal to verify that your postgres CLI is working.
- Clone repo `git clone git@github.com:atulmy/crate.git crate`

- Crate installation:
  - Switch to `code` directory `cd code`
  - Configurations
    - Modify `/api/src/config/database.json` for database credentials
    - Modify `/api/.env` for PORT (optional)
    - Modify `/web/.env` for PORT / API URL (optional)
  - Setup
    - API: Install packages and database setup (migrations and seed) `cd api` and `npm run setup`
    - Webapp: Install packages `cd web` and `npm install`



- Development
  - Run API `cd api` and `npm start`, browse GraphiQL at http://localhost:8000/
  - Run Webapp `cd web` and `npm start`, browse webapp at http://localhost:3000/
- Production
  - Run API `cd api` and `npm run start:prod`, creates an optimized build in `build` directory and runs the server
  - Run Webapp `cd web` and `npm run start:prod`, creates an optimized build in `build` directory and runs the server

## Usage

```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)