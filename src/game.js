const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { createCard } = require('./card');
const { createDeck, countCards } = require('./deck');
const { createNewRound } = require('./round');

const printMessage = deck => {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
};

const printQuestion = round => {
  util.main(round);
};

const start = array => {
  const cards = array.map(element => createCard(element.id, element.question, element.answers, element.correctAnswer));
  const deck = createDeck(cards);
  const round = createNewRound(deck);
  printMessage(deck);
  printQuestion(round);
}

const startCardsForTest = array => {
  const cards = array.map(element => createCard(element.id, element.question, element.answers, element.correctAnswer));
  return cards;
};

const startDeckForTest = array => {
  const deck = createDeck(array);
  return deck;
}

const startRoundForTest = object => {
  const round = createNewRound(object);
  return round;
}

module.exports = { 
  printMessage, 
  printQuestion, 
  startCardsForTest,
  startDeckForTest,
  startRoundForTest,
  start
 };
