function createCard(id, question, answers, correctAnswer) {
  return card = {
    id,
    question,
    answers,
    correctAnswer
  };
};

module.exports = {
  createCard
};