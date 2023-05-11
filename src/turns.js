let evaluateGuess = (guess, card) => {
  let message;
  guess === card.correctAnswer ? message = 'correct!' : message = 'incorrect!';
  console.log(message);
  return message;
};

module.exports = {
  evaluateGuess
};