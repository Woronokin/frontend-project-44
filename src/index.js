import readlineSync from 'readline-sync';
import cli from '../src/cli.js';

const roundCount = 3;

export const playGame = (rule, getGame) => {
    const userName = cli();
    console.log(rule);
    for (let i = 0; i < roundCount; i += 1) {
        const { question, correctAnswer } = getGame();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${userName}!`);
};