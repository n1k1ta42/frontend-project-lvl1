import constants from '../constants.js';
import getNameAndGreet from '../cli.js';
import getRandomInt from '../utils/getRandomInt.js';
import checkGame from '../utils/checkGame.js';
import getUserAnswer from '../utils/getUserAnswer.js';
import showQuestion from '../utils/showQuestion.js';
import buildProgression from '../utils/buildProgression.js';

const game = (name) => {
  const lastInderInProgression = constants.PROGRESSION_LENGHT - 1;
  const firstElem = getRandomInt(constants.MIN_NUMBER, constants.MAX_NUMBER);
  const step = getRandomInt(constants.MIN_NUMBER, constants.MAX_NUMBER);
  const replacementIndex = getRandomInt(0, lastInderInProgression);
  const progression = buildProgression(firstElem, step, constants.PROGRESSION_LENGHT);
  const answer = String(progression[replacementIndex]);
  progression[replacementIndex] = '..';
  const question = progression.join(' ');
  showQuestion(question);
  const userAnswer = getUserAnswer();

  checkGame({
    userAnswer,
    answer,
    gameFn: game,
    name,
  });
};

const progressionGame = () => {
  const name = getNameAndGreet();
  console.log('What number is missing in the progression?');
  game(name);
};

export default progressionGame;
