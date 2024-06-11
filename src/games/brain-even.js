import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const minNum = 1;
const maxNum = 100;

const getGame = () => {
  const question = getRandomNumber(minNum, maxNum);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const playBrainEven = () => {
  playGame(rule, getGame);
};

export default playBrainEven;
