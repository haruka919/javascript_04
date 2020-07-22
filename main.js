(() => {
  const API_URL = 'https://opentdb.com/api.php?amount=10';
  const title = document.querySelector('.title');
  const text = document.querySelector('.text');
  const info = document.querySelector('.info');
  const answerList = document.querySelector('.answer-list');
  const startButton = document.querySelector('.start');

  // クイズに関する情報
  const quizState = {
    quizzes: [],
    currentQuizIndex: 0,
    correctCount: 0
  }
})();