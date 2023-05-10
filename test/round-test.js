const chai = require('chai');
const expect = chai.expect;
const { createNewRound, takeTurn, calcPercent, endRound } = require('../src/round');
const { sampleCards } = require('../src/dummy-data');
const { createDeck, countCards } = require('../src/deck'); 

describe('createNewRound function', () => {
  it('should create a new round that starts with the correct properties', () => {
    const newDeck = createDeck([sampleData]);

    const newRound = createNewRound(newDeck);

    expect(newRound)to.deep.equal({
      deck: [{
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
      }], 
      currentCard: {
        id: 1,
        question: 'What is my name?',
        answers: ['Rachel', 'Katherine', 'Bell'],
        correctAnswer: 'Rachel'
      },
      turns: 0,
      incorrectGuesses: []
    };)
  });
});