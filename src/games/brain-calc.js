import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const minNum = 1;
const maxNum = 100;

const getQuestion = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default:
      throw new Error(`No such operation - '${operation}'`);
  }
};

const getGame = () => {
  const numberOne = getRandomNumber(minNum, maxNum);
  const numberTwo = getRandomNumber(minNum, maxNum);
  const operation = operators[getRandomNumber(0, operators.length)];
  const question = `${numberOne} ${operation} ${numberTwo}`;
  const correctAnswer = getQuestion(numberOne, numberTwo, operation).toString();
  return { question, correctAnswer };
};

const playBrainCalc = () => {
  playGame(rule, getGame);
};

export default playBrainCalc;
