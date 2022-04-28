import getRandomInt from './getRandomInt.js';

const getRandomSign = (array) => array[getRandomInt(0, array.length)];

export default getRandomSign;
