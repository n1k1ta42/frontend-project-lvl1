import constants from '../constants.js';

let gameCount = 0;

const checkGame = ({
  userAnswer, answer, gameFn, name,
}) => {
  if (userAnswer === answer) {
    console.log('Correct!');
    gameCount += 1;
    if (gameCount < constants.NUMBER_OF_GAMES) {
      return gameFn(name);
    }
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
  return null;
};

export default checkGame;
