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
    title.textContent = '取得中';
    text.textContent = '少々お待ちください';
    startButton.hidden = true;

    // クイズデータを取得
    fetch(API_URL)
      .then((response) => response.json())

      // クイズデータを取得したら、クイズ情報をリセットする
      .then((data) => {
        quizState.quizzes = data.results;
        // 取得したクイズデータをセット
        setQuiz();
      });
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