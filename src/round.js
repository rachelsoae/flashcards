const createNewRound = (deck) => {
  return round = {
    deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: []
  };
};

module.exports = { createNewRound }