import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGame = () => {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const playBrainPrime = () => {
  playGame(rule, getGame);
};

export default playBrainPrime;
