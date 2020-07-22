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
    // クイズ画面 or 最終問題であれば終了画面を表示
    if (quizState.currentQuizIndex < quizState.quizzes.length) {
      let currentQuiz = quizState.quizzes[quizState.currentQuizIndex];
      makeQuiz(quizState.currentQuizIndex, currentQuiz);
    } else {
      finishQuiz();
    }
  }


  // クイズを作成
  const makeQuiz = (index, quiz) => {
    title.textContent = `問題${index + 1}`;
    info.hidden = false;
    document.querySelector('.category span').textContent = quiz.category;
    document.querySelector('.difficulty span').textContent = quiz.difficulty;
    text.innerHTML = quiz.question;

    // ランダムに並べた回答リスト（配列）を取得
    const answers = makeAnswers(quiz);

    answers.forEach((answer) => {
      // 回答ボタンを作成
      let answerButton = document.createElement('button');
      answerList.appendChild(answerButton);
      answerButton.innerHTML = answer;

      answerButton.addEventListener('click', (e) => {
        // 正解であれば、正答数カウントを1増やす
        if (e.target.textContent === quiz.correct_answer) {
          quizState.correctCount++;
        }
        // インデックスカウントを増やし、次のクイズをセット
        quizState.currentQuizIndex++;
        setQuiz();
      });
    });
  }


  // 答えをランダムに並び替える
  const makeAnswers = () => {
  }


  // 終了画面
  const finishQuiz = () => {

  }
})();