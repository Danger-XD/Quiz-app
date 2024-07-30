const quiz = [
  {
    question: "What is full form of Js?",
    a: "JavaScript",
    b: "JangoScript",
    c: "JavaSite",
    d: "JackSaved",
    answer: "a",
  },
  {
    question: "Which variable is correct?",
    a: "+getData",
    b: "23data",
    c: "const",
    d: "$saveData",
    answer: "d",
  },
  {
    question:
      "Which method used to add elements from the front side of an array?",
    a: "push()",
    b: "pop()",
    c: "unshift()",
    d: "add()",
    answer: "c",
  },
  {
    question: "Which DOM method is used to get any element by its ID?",
    a: "getElementByClass()",
    b: "getElementById()",
    c: "getElementByName()",
    d: "getElementByTagName()",
    answer: "b",
  },
  {
    question: "Which one is correct code?",
    a: "git log --method",
    b: "git reset",
    c: "git delete .",
    d: 'git commit -mes "hello world"',
    answer: "b",
  },
];

const quizBox = document.getElementById("quiz-box");
const questionEL = document.getElementById("quiz-question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit-btn");
const answerEls = document.querySelectorAll(".name");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuestion = quiz[currentQuiz];
  questionEL.innerHTML = currentQuestion.question;
  a_text.innerHTML = currentQuestion.a;
  b_text.innerHTML = currentQuestion.b;
  c_text.innerHTML = currentQuestion.c;
  d_text.innerHTML = currentQuestion.d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer == undefined) {
    alert("select an answer");
  } else {
    if (answer === quiz[currentQuiz].answer) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quiz.length) {
      loadQuiz();
    } else {
      quizBox.innerHTML = `<h1 class ="score-board">You scored ${score} out of ${quiz.length}</h1>
      <button id="submit-btn" onclick="location.reload()">Reload</button>`;
    }
  }
});
