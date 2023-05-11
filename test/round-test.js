const chai = require('chai');
const expect = chai.expect;

const { createNewRound, takeTurn, calcPercent, endRound } = require('../src/round');
const { createDeck } = require('../src/deck'); 
const { sampleCards } = require('../src/dummy-data');

describe('createNewRound function', () => {
  it('should create a new round object that contains the correct properties', () => {
    const newDeck = createDeck(sampleCards);

    const newRound = createNewRound(newDeck);

    expect(newRound).to.deep.equal({
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
    });
  });
});

describe('takeTurn function', () => {
    it('should count the number of turns taken', () => {
    const newDeck = createDeck(sampleCards);
    const newRound = createNewRound(newDeck);
    const firstGuess = 'Katherine';
    const secondGuess = 'Rachel';

    takeTurn(firstGuess, newRound);
    takeTurn(secondGuess, newRound);

    expect(newRound.turns).to.equal(2);
  });

  it.only('should update the currentCard', () => {
    const newDeck = createDeck(sampleCards);
    const newRound = createNewRound(newDeck);
    const newGuess = 'Cancer';

    takeTurn(newGuess, newRound);
    
    expect(newRound.currentCard).to.deep.equal({
      id: 2,
      question: 'What is my sign?',
      answers: ['Scorpio', 'Cancer', 'Aries'],
      correctAnswer: 'Cancer'
    });
  });

  it('should print a different message if the guess is incorrect', () => {

  });

  it('should update the incorrect guesses array if the guess is incorrect', () => {

  });

  it('should print a message if the guess is correct', () => {

  });

  it('should not update the incorrectGuesses array if the guess is correct', () => {

  });
})