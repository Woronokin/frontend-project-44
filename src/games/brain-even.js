import playGame from '../index.js';
import getRandomNumber from '../random-number.js';

const isEven = (num) => num % 2 === 0;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGame = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const brainEven = () => {
  playGame(rule, getGame);
};

export default brainEven;
