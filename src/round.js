const { evaluateGuess } = require('../src/turns')

const createNewRound = (deck) => {
  return round = {
    deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: []
  };
};

const takeTurn = (guess, round) => {;
  const message = evaluateGuess(guess, round.currentCard);
  if (message === 'incorrect!') {
    round.incorrectGuesses.push(round.currentCard.id);
  };
  round.turns += 1;
  round.currentCard = round.deck[round.turns];
  return message;
};

const calculatePercentCorrect = (round) => {
  const totalCorrect = round.turns - round.incorrectGuesses.length;
  return (totalCorrect / round.turns) * 100;
};

const endRound = (round) => {
  const result = calculatePercentCorrect(round);
  return `**Round Over!** You answered ${result}% of the questions correctly!`;
};


module.exports = { 
  createNewRound,
  takeTurn,
  calculatePercentCorrect,
  endRound
 };