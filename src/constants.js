export default {
  NUMBER_OF_GAMES: 3,
  SIGNS: [
    { operator: '+', action: (a, b) => a + b },
    { operator: '-', action: (a, b) => a - b },
    { operator: '*', action: (a, b) => a * b },
  ],
  MIN_NUMBER: 1,
  MAX_NUMBER: 10,
};
