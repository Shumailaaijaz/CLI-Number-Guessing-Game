#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
  {
    name: "UserGuessedNumber",
    type: "number",
    message: "please select a number between 1-6:",
  },
]);

if (answers.UserGuessedNumber === randomNumber) {
  console.log("Congratulations! you guess right number.");
} else {
  console.log("you guessed wrong number");
}
