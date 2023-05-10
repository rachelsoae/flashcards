const chai = require('chai');
const expect = chai.expect;
const { evaluateGuess } = require('../src/turns');

describe('evaluateGuess function', () => {
  before(() => {
    return sampleCard = {
      id: 1,
      question: 'What is my name?',
      answers: ['Rachel', 'Katherine', 'Bell'],
      correctAnswer: 'Rachel'
    };
  });
  
  it('should return a message if the answer is correct', () => {
    const guess = 'Rachel';

    const result = evaluateGuess(guess, sampleCard);

    expect(result).to.equal('correct!');
  });

  it('should return a different message if the answer is incorrect', () => {
    const guess = 'Katherine';

    const result = evaluateGuess(guess, sampleCard);

    expect(result).to.equal('incorrect!');
  });
});