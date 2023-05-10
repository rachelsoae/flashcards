const chai = require('chai');
const expect = chai.expect;
const { createDeck, countCards } = require('../src/deck');
const { sampleCards } = require('../src/dummy-data');

describe('createDeck function', () => {
  it('should return an array of cards', () => {
    const cards = [sampleCards[0], sampleCards[1], sampleCards[2]];

    const deck = createDeck(cards);

    expect(deck).to.deep.equal([{
      id: 1,
      question: 'What is my name?',
      answers: ['Rachel', 'Katherine', 'Bell'],
      correctAnswer: 'Rachel'
    }, {
      id: 2,
      question: 'What is my sign?',
      answers: ['Scorpio', 'Cancer', 'Aries'],
      correctAnswer: 'Cancer'
    }, {
      id: 3,
      question: 'What is my occupation?',
      answers: ['astronaut', 'dancer', 'student'],
      correctAnswer: 'student'
    }])
  });

  it('should count the number of cards in a deck', () => {
    const cards = [sampleCards[0], sampleCards[1], sampleCards[2]];
    const deck = createDeck(cards);
    const numCards = countCards(deck);

    expect(numCards).to.equal(3);
  })
});