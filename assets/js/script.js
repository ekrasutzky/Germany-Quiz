const quizContainer = document.getElementById('quiz');
const scoreContainer = document.getElementById('score-value');
const feedbackContainer = document.getElementById('feedback');
const startButton = document.getElementById('start-btn');

const questions = [
    {
        question: "Germany is the largest country in Europe.",
        answer: false,
        image: "germany.jpg"
    },
    {
        question: "The capital city of Germany is Berlin.",
        answer: true,
        image: "berlin.jpg"
    },
    {
        question: "German is the official language of Germany.",
        answer: true,
        image: "german.jpg"
    },
    // Add more questions here
];

let score = 0;
let currentQuestion = 0;

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    startButton.style.display = 'none';
    renderQuestion();
}

function renderQuestion() {
    quizContainer.innerHTML = '';

    if (currentQuestion >= questions.length) {
        finishQuiz();
        return;
    }

    const question = questions[currentQuestion];
    const questionElement = document.createElement('div');
    questionElement.innerHTML = question.question;
    quizContainer.appendChild(questionElement);

    const trueButton = createButton('True');
    const falseButton = createButton('False');

    trueButton.addEventListener('click', () => {
        checkAnswer(true, question);
    });
    falseButton.addEventListener('click', () => {
        checkAnswer(false, question);
    });

    quizContainer.appendChild(trueButton);
    quizContainer.appendChild(falseButton);
}

function createButton(text) {
    const button = document.createElement('button');
    button.innerHTML = text;
    return button;
}

function checkAnswer(userAnswer, question) {
    if (userAnswer === question.answer) {
        score++;
        feedbackContainer.innerHTML = '<span class="correct">Correct!</span>';
    } else {
        feedbackContainer.innerHTML = '<span class="incorrect">Incorrect!</span>';
    }

    scoreContainer.innerHTML = score;
    currentQuestion++;
    renderQuestion();
}

function finishQuiz() {
    quizContainer.innerHTML = 'Congratulations! You have completed the quiz.';
    feedbackContainer.innerHTML = '';

    startButton.style.display = 'inline-block';
    startButton.innerHTML = 'Restart';
    startButton.addEventListener('click', restartQuiz);
}

function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    scoreContainer.innerHTML = score;
    feedbackContainer.innerHTML = '';
    startQuiz();
}

const usernameInput = document.getElementById('username');


usernameInput.addEventListener('input', () => {
    if (usernameInput.value.trim() !== '') {
        startButton.removeAttribute('disabled');
    } else {
        startButton.setAttribute('disabled', true);
    }
});