const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');

describe('create card function', () => {
  it('should be a function', () => {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', () => {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });

  it('should create a different card', () => {
    const card2 = createCard(10, 'What floats?', ['a duck', 'a witch', 'very small rocks'], 'a duck');

    expect(card2.id).to.equal(10);
    expect(card2.question).to.equal('What floats?');
    expect(card2.answers).to.deep.equal(['a duck', 'a witch', 'very small rocks']);
    expect(card2.correctAnswer).to.equal('a duck');
  })
});