const { evaluateGuess } = require('../src/turns')

const createNewRound = (deck) => {
  return round = {
    deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: []
  };
};

const takeTurn = (guess, round) => {
  round.turns += 1;
  round.currentCard = round.deck[round.turns];
  if (evaluateGuess(guess, round.currentCard) === 'incorrect!') {
    round.incorrectGuesses.push(round.currentCard.id - 1);
  };
  return round;
};


module.exports = { 
  createNewRound,
  takeTurn
 }