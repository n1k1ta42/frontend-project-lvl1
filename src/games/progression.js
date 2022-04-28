import constants from '../constants.js';
import runGame from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

const buildProgression = (first, step, length) => {
  const progression = Array.from({ length }, (_, index) => first + step * index);
  return progression;
};

const gameConditions = () => {
  const lastInderInProgression = constants.PROGRESSION_LENGHT - 1;
  const firstElem = getRandomInt(constants.MIN_NUMBER, constants.MAX_NUMBER);
  const step = getRandomInt(constants.MIN_NUMBER, constants.MAX_NUMBER);
  const replacementIndex = getRandomInt(0, lastInderInProgression);

  const progression = buildProgression(firstElem, step, constants.PROGRESSION_LENGHT);
  const answer = progression[replacementIndex];
  progression[replacementIndex] = '..';

  return {
    question: progression.join(' '),
    answer: String(answer),
  };
};

const start = () => {
  runGame('What number is missing in the progression?', gameConditions);
};

export default start;
