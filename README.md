#### LABHAT presents:
# Crate

Crate, by LABHAT, is an updated version of an existing repo created by Turing School of Software and Design].  You can find the original repo [here](https://github.com/atulmy/crate), with a more robust description as to what the core repo is.

Our additions lay the groundwork to helping the user understand their personal style, and start receiving more personalized creates.

## Setup and Running
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
    - Type `psql` in your terminal to access the postgres command line interface (CLI)
    - Check your available postgres users by running `\du` in the postgres CLI.
    - Modify `/api/src/config/database.json` for database credentials.
      - Choose one of the names (“postgres” should be fine) to put as your username in the database.json.
      - If you followed the default installation instructions when install postgres you do not need a password. If you have a password created, add that to the database.json file.
    - Create your database locally by running `CREATE DATABASE crate;` in the postgres CLI;
  - Setup
    - API: Install packages and database setup (migrations and seed) `cd api` and `npm run setup`
    - Webapp: Install packages `cd web` and `npm install`
  - Development
    - Run API `cd api` and `npm start`, browse GraphiQL at http://localhost:8000/
    - Run Webapp `cd web` and `npm start`, browse webapp at http://localhost:3000/
  - Production
    - Run API `cd api` and `npm run start:prod`, creates an optimized build in `build` directory and runs the server
    - Run Webapp `cd web` and `npm run start:prod`, creates an optimized build in `build` directory and runs the server

- Database installation
  - Install Sequelize by running these on the command line
    - `npm i --save sequelize`
    - `npm i --g sequelize-cli`
    - `yarn add sequelize`
  - Create testing database:
    - type on the command line `psql crates`
    - type in psql `CREATE DATABASE crate_testing;`
  - Run on the command line, white in the `/api` folder, the following code to setup the database:
    - `sequelize db:create`
    - `sequelize db:migrate`
    - `sequelize db:seed:all`


### Common errors

When running `npm run setup` in the api directory:
```
ERROR:root:code for hash md5 was not found.
Traceback (most recent call last):
  File "/usr/local/Cellar/python@2/2.7.15/Frameworks/Python.framework/Versions/2.7/lib/python2.7/hashlib.py", line 147, in <module>
```

The cause could potentially be from switching to Catalina or bash moving to zshell.

Solution:

Run `ls /usr/local/Cellar/openssl` - This should display 1.0.2t (potentially 1.0.2r)

Based on that version run: `brew switch openssl 1.0.2t` or `brew switch openssl 1.0.2r`

Finally, run `python -c "import hashlib;m=hashlib.md5();print(m.hexdigest())"`

## Skills

### Workflow
- Git Rebase
- PR's and code review
- Test-driven development

### AGILE project management
- Daily standup's
- Retros
- Project board

### Analyzing existing codebase
- Diagram data flow
- Code annotation
- Wireframing


## Technologies

### Front-end
- JavaScript
- HTML
- CSS styled components
- React/Redux
- NPM

### Back-end
- Node.js
- PSQL
- GraphQL
- Postgres
- Sequelize
- Yarn

## Wins and Challenges

## Future Iterations
First and foremost, our very first iteration would be to complete the functionality.

Beyond that, we would do these:
  - Frontend:
    - Update the survey so that:
      - There is feedback denoting that an article of clothing had been selected.
      - Only one article of clothing is able to be selected in each clothing category.
      - The clothing options only log one click, and if another one is clicked, the results array reflects thing.
      - It provides feedback as to what your survey results are.
    - Sad path testing.
    - Integration/Async Testing
  - Backend:
    - Update the User migration to require authorization.
    - Test the above.
    - Integrate the user's style with the crates to allow for more personalized products.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Contributors
- Ebou Jobe - [GitHub](https://github.com/ebouJ)
- Nenad Radovanovic - [GitHub](https://github.com/nrcloud) · [Twitter](https://twitter.com/publicshone)
- Nicholas Drew - [GitHub](https://github.com/nickdrew)
- Mateus Abdala - [GitHub](https://github.com/mateusabdala)
- Hossein Nedaee - [GitHub](https://github.com/hosseinnedaee)
- Mohammad Afzal - [GitHub](https://github.com/afzalex)
- 👤 **L**uke Hunter James-Erickson - [GitHub](https://github.com/drewwilliams5280)
- 👤 **A**rique Aguilar - [GitHub](https://github.com/Arique1104)
- 👤 **B**rigette Doelp - [GitHub](https://github.com/brigettedoelp)
- 👤 **H**anna Kim - [GitHub](https://github.com/hannakim91)
- 👤 **A**ndrew Williams - [GitHub](https://github.com/)
- 👤 **T**im Keresey - [GitHub](https://github.com/timkeresey)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Contributors
- Ebou Jobe - [GitHub](https://github.com/ebouJ)
- Nenad Radovanovic - [GitHub](https://github.com/nrcloud) · [Twitter](https://twitter.com/publicshone)
- Nicholas Drew - [GitHub](https://github.com/nickdrew)
- Mateus Abdala - [GitHub](https://github.com/mateusabdala)
- Hossein Nedaee - [GitHub](https://github.com/hosseinnedaee)
- Mohammad Afzal - [GitHub](https://github.com/afzalex)
- 👤 **L**uke Hunter James-Erickson - [GitHub](https://github.com/drewwilliams5280)
- 👤 **A**rique Aguilar - [GitHub](https://github.com/Arique1104)
- 👤 **B**rigette Doelp - [GitHub](https://github.com/brigettedoelp)
- 👤 **H**anna Kim - [GitHub](https://github.com/hannakim91)
- 👤 **A**ndrew Williams - [GitHub](https://github.com/)
- 👤 **T**im Keresey - [GitHub](https://github.com/timkeresey)

## License
Copyright 2020 Luke Hunter James-Erickson, Arique Aguilar, Brigette Doelp, Hanna Kim, Andrew Williams, Tim Keresey

Permission is hereby granted to any person obtaining a copy of this software and associated materials to make use of the software and associated materials according to the terms of the MIT License (see included file `LICENSE_MIT`) IF AND ONLY IF they have not read any portion of this file.

Any person who has read any portion of this file may not make any use of the software and associated materials for any purpose whatsoever. Any permissions previously granted to any person to use this software and associated materials terminate and are revoked with immediate effect upon their reading of any portion of this file.

## Additional Links
- [DTR](https://docs.google.com/document/d/1e7oHMyNoO9tgJPT2e-Eh5AHE19mBNjuCA2Olk0Lfej4/edit)
- [Project Board](https://github.com/Arique1104/Crate/projects/1)
- [Wireframe](https://www.figma.com/file/l4Si2eYviJaALqJd7hGPkn/Crate---M4-BEEFEE-Project?node-id=0%3A1)
- [Dataflow Diagram](https://jamboard.google.com/d/1YGkwFV1xnleAsDtARSTBzA3OVC5OnC4QGX_ydD_ai60/viewer)
- [Project Specs](https://mod4.turing.io/projects/crate/crate.html)
