# Mosano Challenge 🧬

> An example worth more than a thousand words

## Proposal 💭

Develop a web platform with the given interface that allows the users to register heir full name, country, and birthday.\
Create a container with components that bring up a form with:

- Name
- Surname
- Country (dropdown of countries)
- Year of birth
- Save button

Once the form is saved, it should show a message that refers to the next birthday as such:

> __Hello__ {name} __from__ {country}. __on__ {day} __of__ {month} __you will be__ {years} __old__!

Also has to show a list with all the entries made.


## Techs 👨‍💻

|Frontend                         |Backend                  |Tools                    |
|---------------------------------|-------------------------|-------------------------|
|Typescript                       |Typescript               |Eslint                   |
|React                            |Express                  |Module Alias             |
|React Router                     |Routing Controllers      |Husky                    |
|Redux + Rdx Thunk + Rdx Persist  |Class Validator          |Lint Staged              |
|Axios                            |MongoDB                  |Msg Commit Linter        |
|i18n                             |Mongoose                 |Docker + Docker Compose  |
|Formik + Yup                     |                         |                         |
|Styled-Components                |                         |                         |



## How to run 🆙

### Backend

Create a `.env` file in the backend root folder with the following values:
```sh
PORT=8080
MONGO_USERNAME=sammy
MONGO_PASSWORD=your_password
MONGO_PORT=27017
MONGO_DB=mosano_challenge
MONGO_HOSTNAME=db
```

Install dependencies, build containers and start backend:
```sh
cd backend      // open backend directory
yarn            // install dependencies
make install    // build containers
make up         // start project
```

### Frontend

Install dependencies and run project
```sh
cd frontend      // open frontend directory
yarn             // install dependencies
yarn start       // start project
```