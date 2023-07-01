let quizContainer = document.getElementById('quiz');
let scoreContainer = document.getElementById('score-value');
let feedbackContainer = document.getElementById('feedback');
let startButton = document.getElementById('start-btn');

let questions = [
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

    let question = questions[currentQuestion];
    let questionElement = document.createElement('div');
    questionElement.innerHTML = question.question;
    quizContainer.appendChild(questionElement);

    let trueButton = createButton('True');
    let falseButton = createButton('False');

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
    let button = document.createElement('button');
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
    

    startButton.style.display = 'inline-block';
    startButton.innerHTML = 'Restart';
    startButton.addEventListener('click', restartQuiz);
    
    let username = document.getElementById('username').value;
    
    let message;
    if (score >= 3) {
        message = `Congratulations, ${username}! You passed the quiz with a score of ${score}/${questions.length}. Well done!`;
    } else {
        message = `Sorry, ${username}. You did not pass the quiz. Your score is ${score}/${questions.length}. Better luck next time!`;
    }

    feedbackContainer.innerHTML = `
        <h2>Quiz Completed</h2>
        <p>${message}</p>
    `;
}

function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    scoreContainer.innerHTML = score;
    feedbackContainer.innerHTML = '';
    startQuiz();
}

let usernameInput = document.getElementById('username');


usernameInput.addEventListener('input', () => {
    if (usernameInput.value.trim() !== '') {
        startButton.removeAttribute('disabled');
    } else {
        startButton.setAttribute('disabled', true);
    }
});
