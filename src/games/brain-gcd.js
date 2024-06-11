import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';
const gameGCD = (numberOne, numberTwo) => {
  const minNum = numberOne > numberTwo ? numberTwo : numberOne;
  let gcd = 1;
  for (let i = 2; i <= minNum; i += 1) {
    if (numberOne % i === 0 && numberTwo % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const getGame = () => {
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = gameGCD(numberOne, numberTwo).toString();
  return { question, correctAnswer };
};

const playBrainGCD = () => {
  playGame(rule, getGame);
};

export default playBrainGCD;
