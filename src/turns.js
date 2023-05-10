function evaluateGuess(guess, card) {
  let message;
  if (guess === card.correctAnswer) {
    message = 'correct!'
  };
  return message;
};

module.exports = {
  evaluateGuess
}