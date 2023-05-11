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
  round.currentCard = round.deck[round.turns]
  return round;
};

module.exports = { 
  createNewRound,
  takeTurn
 }