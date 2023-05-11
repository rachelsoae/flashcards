const chai = require('chai');
const expect = chai.expect;

const { createNewRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');
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
  let newDeck;
  let newRound;
  before('set up a new deck', () => {
    newDeck = createDeck(sampleCards);
  });

  beforeEach('set up a new round', (done) => {
    newRound = createNewRound(newDeck);
    done();
  });
  
  it('should count the number of turns taken', () => {
    takeTurn('guess', newRound);
    takeTurn('second guess', newRound);

    expect(newRound.turns).to.equal(2);
  });

  it('should update the currentCard', () => {
    takeTurn('guess', newRound);
    
    expect(newRound.currentCard).to.deep.equal({
      id: 2,
      question: 'What is my sign?',
      answers: ['Scorpio', 'Cancer', 'Aries'],
      correctAnswer: 'Cancer'
    });
  });

  it('should update the incorrect guesses array if the guess is incorrect', () => {
    const incorrectGuess = 'Katherine';

    takeTurn(incorrectGuess, newRound);

    expect(newRound.incorrectGuesses).to.deep.equal([1]);
  });

  it('should not update the incorrectGuesses array if the guess is correct', () => {
    const correctGuess = 'Rachel';

    takeTurn(correctGuess, newRound);

    expect(newRound.incorrectGuesses).to.deep.equal([]);
  });
});

describe('calculatePercentCorrect function', () => {
  it('should calculate the percentage of correct guesses', () => {
    const newDeck = createDeck(sampleCards);
    const newRound = createNewRound(newDeck);
    takeTurn('Rachel', newRound);
    takeTurn('Scorpio', newRound);
    
    const result = calculatePercentCorrect(round);

    expect(result).to.equal(50);
  });
});

describe('endRound function', () => {
  it('should print a message with the results of the round', () => {
    const newDeck = createDeck(sampleCards);
    const newRound = createNewRound(newDeck);
    takeTurn('Rachel', newRound);
    takeTurn('Scorpio', newRound);

    const result = endRound(round);

    expect(result).to.equal('**Round Over!** You answered 50% of the questions correctly!');
  });
});