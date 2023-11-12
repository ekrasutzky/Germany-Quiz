let quizContainer = document.getElementById('quiz');
let scoreContainer = document.getElementById('score-value');
let feedbackContainer = document.getElementById('feedback');
let startButton = document.getElementById('start-btn');

// Here's the questions that the user needs to answer to score. 
const questions  = [
    {
        question: "Germany is the largest country in Europe.",
        answer: false,        
    },
    {
        question: "The capital city of Germany is Berlin.",
        answer: true,    
    },
    {
        question:"The national dish of Germany is sushi.",
        answer: false, 
    },
    {
        question: "German is the official language of Germany.",
        answer: true,
    },
    {
        question: "The Berlin Wall was built to keep people from entering Germany.",
        answer: false,
    },
    {
        question: "Germany is known for its world-renowned automobile industry.",
        answer: true,
    },
    {
        question: "The Black Forest is a desert region in Germany.",
        answer: false,

    },
    {
        question:"The Berlin Wall fell in 1989, marking the reunification of East and West Germany.",
        answer:true,
    },
    {
        question:"Germany is known for its spicy cuisine.",
        answer: false,
    },
    {
       question:"Germany is home to the Black Forest, a picturesque region known for its dense forests and charming villages." ,
       answer:true,
    }

];
// fuctions to keep the score, check the wrong/right questions and eventListeners
let score = 0;
let currentQuestion = 0;

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    document.getElementById('user-input').style.display = 'none';
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
    let questionElement = createAndAppendElement('div', question.question, quizContainer);
    
    createAndAppendButton('True', () => checkAnswer(true, question), quizContainer);
    createAndAppendButton('False', () => checkAnswer(false, question), quizContainer);
}

function createAndAppendElement(tag, content, parent) {
    let element = document.createElement(tag);
    element.innerHTML = content;
    parent.appendChild(element);
    return element;
}

function createAndAppendButton(text, clickHandler, parent) {
    let button = createAndAppendElement('button', text, parent);
    button.addEventListener('click', clickHandler);
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
// fuctions to give feedback and restart the game 
function finishQuiz() {
    startButton.style.cssText = 'display:inline-block;';  
    startButton.innerHTML = 'Restart';  
    startButton.addEventListener('click', restartQuiz); 
    feedbackContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>${score >= 10 ? `Congratulations, ${document.getElementById('username').value}! You passed the quiz with a score of ${score}/${questions.length}. Well done!` : `Sorry, ${document.getElementById('username').value}. You did not pass the quiz. Your score is ${score}/${questions.length}. Better luck next time!`}</p>
    `;  
}


// Feedback for when the game ends with the name that user chose.
let usernameInput = document.getElementById('username');

usernameInput.addEventListener('input', function() {
    if (usernameInput.value.trim() !== '') {
    startButton.removeAttribute('disabled');
    } else {
    startButton.setAttribute('disabled', true);
    }
    });

// Function to restart the game 

function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    scoreContainer.innerHTML = score;
    feedbackContainer.innerHTML = '';
    startQuiz();
}

