import playGame from '../index.js';
import getRandomNumber from '../random-number.js';

const rule = 'What number is missing in the progression?s';

const progressionLength = 10;
const getGame = () => {
  const startNum = getRandomNumber(0, 100);
  const progressionDiff = getRandomNumber(1, 100);
  const hiddenElement = getRandomNumber(0, progressionLength);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNum + progressionDiff * i);
  }
  const correctAnswer = progression[hiddenElement].toString();
  progression[hiddenElement] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

const brainProgression = () => {
  playGame(rule, getGame);
};

export default brainProgression;