# Tech Quiz Test Suite

## Description

This project is a Tech Quiz application enhanced with Cypress tests for both component and end-to-end (E2E) testing. It ensures reliability and robustness in modern web applications through comprehensive automated testing.
The app is built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. It allows users to take a quiz of ten random questions and view their final score.

- **Motivation:** To build a robust full-stack MERN application with automated testing.
- **Purpose:** To create a tech quiz app with reliable user experience and test coverage.
- **Problem Solved:** Provides an interactive quiz platform and demonstrates automated test-driven development.
- **What I Learned:** MERN stack development, Cypress component & E2E testing, database seeding, and testing best practices.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Link For Video](#link-for-video)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/lunahoushmand16/TechQuiz-Test-Suite
   ```
2. Navigate to the project folder:
   ```sh
   cd TechQuiz-Test-Suite 
   ```
3. Install dependencies:
    ```sh
   npm install
   ```
4. Seed the database:
   ```sh
   npm run seed
   ```
5. Start the app (both server and client):
   ```sh
   npm run start:dev
   ```

## Usage

- Open your browser and navigate to: http://localhost:3000

- Click Start Quiz to begin.

- Answer the multiple-choice questions.

- At the end, view your final score.

- Option to start a new quiz.

### Screenshots:

![SignUp page](./Assets/Sign-in%20page.png)
![Login page](./Assets/login%20page.png)
![Look for the save books/Delete](./Assets/Search%20for%20Book.png)

## Credits

- Created by **[Luna Houshmans](https://github.com/lunahoushmand16)**
- Technologies used: 
  - **[Apollo Server](https://www.apollo.io/)**
  - **[GraphQL](https://graphql.org/)**
  - **[Express.js](https://expressjs.com/)**
  - **[TypeScript](https://www.typescriptlang.org/)**
  - **[Mongoose](https://mongoosejs.com/)**
  - **[MongoDB Compass](https://www.mongodb.com/products/tools/compass)**
  - **[React.js](https://react.dev/)**
  - **[Vitejs](https://vite.dev/)**
   - **[Node.js](https://nodejs.org/en)**

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## Badges

![GitHub repo size](https://img.shields.io/github/repo-size/lunahoushmand16/TechQuiz-Test-Suite)
![GitHub contributors](https://img.shields.io/github/contributors/lunahoushmand16/TechQuiz-Test-Suite)
![GitHub stars](https://img.shields.io/github/stars/lunahoushmand16/TechQuiz-Test-Suite?style=social)

## Features

- Dynamic quiz generation with random questions

- Tracks score and quiz progress

- Allows quiz restart

- MERN stack architecture

- Comprehensive Cypress testing (component & E2E)

- Database seeding with predefined question sets

## How to Contribute

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make changes and commit: `git commit -m 'Add feature X'`
4. Push changes: `git push origin feature-name`
5. Open a pull request

## Tests
This project includes automated Cypress testing:

✅ Component tests

 - Verifies the Quiz component renders questions and answer options

 - Checks button click interactions

 - Tests quiz progression and scoring

✅ End-to-End (E2E) tests

 - Simulates full user flow: starting quiz, answering questions, completing quiz

 - Confirms UI updates and scoring work as expected

Tests can be run using:
  ```sh
  npx cypress open
  ```

## Link For Video

[Live Demo Video]()