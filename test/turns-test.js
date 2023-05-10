const chai = require('chai');
const expect = chai.expect;
const { evaluateGuess } = require('../src/turns');

describe('evaluateGuess function', () => {
  it('should return a message if the answer is correct', () => {
    const card = {
      id: 1,
      question: 'What is my name?', 
      answers: ['Rachel', 'Katherine', 'Bell'],
      correctAnswer: 'Rachel'
    };
    const guess = 'Rachel';

    const result = evaluateGuess(guess, card);

    expect(result).to.equal('correct!');
  });

  it('should return a different message if the answer is incorrect', () => {
    const card = {
      id: 1,
      question: 'What is my name?', 
      answers: ['Rachel', 'Katherine', 'Bell'],
      correctAnswer: 'Rachel'
    };
    const guess = 'Katherine';

    const result = evaluateGuess(guess, card);

    expect(result).to.equal('incorrect!');
  });

});