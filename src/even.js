import readlineSync from 'readline-sync';
import greetings from './cli.js';

const NUMBER_OF_GAMES = 3;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (n) => n % 2 === 0;

function game(name) {
  const min = 1;
  const max = 100;
  const number = getRandomInt(min, max);
  const answer = isEven(number) ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === answer) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
    console.log(`Let's try again, ${name}!`);
  }
}

export default function even() {
  const name = greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < NUMBER_OF_GAMES; i += 1) {
    game(name);
  }
  console.log(`Congratulations, ${name}!`);
}
