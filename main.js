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

  // 初期表示
  window.addEventListener('load', () => {
    info.hidden = true;
  });

  // クイズを開始する
  startButton.addEventListener('click', () => {
    startQuiz();
  });

  // クイズデータを取得する
  const startQuiz = () => {
    // ロード中の表示

    // クイズデータを取得

    // 取得したクイズデータをセット
    setQuiz();
  }


  // クイズをセット
  const setQuiz = () => {
    // クイズを作成 or 最終問題であればクイズを終了
  }


  // クイズを作成
  const makeQuiz = () => {

  }


  // 終了画面
  const finishQuiz = () => {

  }
})();