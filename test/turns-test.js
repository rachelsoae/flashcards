const chai = require('chai');
const expect = chai.expect;
const { evaluateGuess } = require('../src/turns');
const { sampleCards } = require('../src/dummy-data');
 
describe('evaluateGuess function', () => {
  it('should return a message if the answer is correct', () => {
    const guess = 'Rachel';

    const result = evaluateGuess(guess, sampleCards[0]);

    expect(result).to.equal('correct!');
  });

  it('should return a different message if the answer is incorrect', () => {
    const guess = 'Katherine';

    const result = evaluateGuess(guess, sampleCards[0]);

    expect(result).to.equal('incorrect!');
  });
});