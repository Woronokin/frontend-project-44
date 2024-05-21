#!/usr/bin/env node
import cli from '../src/cli.js';
import readlineSync from 'readline-sync';

const brainCalc = () => {
    const userName = cli();
    console.log('What is the result of the expression?');

    const roundsCount = 3;
    for (let i = 0; i < roundsCount; i += 1) {
        const randomNumber = () => Math.floor(Math.random() * 100) + 1;

        const numberOne = randomNumber();
        const numberTwo = randomNumber();

        console.log(`Question: ${numberOne} + ${numberTwo}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = numberOne + numberTwo;

        if (userAnswer.trim() !== correctAnswer.toString()) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }

        console.log('Correct!');
    }

    console.log(`Congratulations, ${userName}!`);
};

export default brainCalc;