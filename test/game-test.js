const chai = require('chai');
const expect = chai.expect;

const { startCardsForTest, startDeckForTest, startRoundForTest } = require('../src/game');
const { sampleCards } = require('../src/dummy-data');

describe('start function, testable increments', () => {
  it('should create an array of cards from data', () => {
    const cards = startCardsForTest(sampleCards);

    expect(cards).to.deep.equal([{
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

  it('should create a deck from the new cards array', () => {
    const cards = startCardsForTest(sampleCards);
    
    const deck = startDeckForTest(cards);

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
    }]);
  });

  it('should create a round from the new deck', () => {
    const cards = startCardsForTest(sampleCards);
    const deck = startDeckForTest(cards);

    const round = startRoundForTest(deck);

    expect(round).to.deep.equal({
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