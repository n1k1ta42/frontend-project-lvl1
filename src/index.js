import readlineSync from 'readline-sync';
import constants from './constants.js';

const runGame = (description, gameConditions) => {
  const play = () => {
    for (let i = 0; i < constants.NUMBER_OF_GAMES; i += 1) {
      const { question, answer } = gameConditions();

      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');

      if (userAnswer !== answer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
        return false;
      }

      console.log('Correct!');
    }

    return true;
  };

  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}`);

  console.log(description);

  const win = play();

  if (win) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default runGame;
