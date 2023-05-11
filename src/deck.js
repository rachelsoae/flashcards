const createDeck = (cardArray) => {
  return [...cardArray];
};

const countCards = (deck) => {
  return deck.length;
};

module.exports = { 
  createDeck,
  countCards
};