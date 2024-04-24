#! /usr/bin/enr node
//Import Inquirer module which is a command line interface for Node.js

import inquirer from "inquirer"

//Decalre a constant 'answers' and assign it to the result of inqurer.prompt function

const answers : {
Sentence:string,
} = await inquirer.prompt([
{
    name : "Sentence",
    type : "input",
    message: "Please enter your sentence to count the words:"
}

])
const words = answers.Sentence.trim().split(" ")

//Print the array of words to the consle

console.log(words)

//Print the word count of the sentence to the console

console.log(`Your sentence word count is ${words.length}`)