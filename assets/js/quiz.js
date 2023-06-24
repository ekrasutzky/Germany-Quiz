// Quiz questions
const quizQuestions = [
  {
    question: "Germany is located in South America.",
    answer: false,
    feedback: "Incorrect! Germany is located in Europe.",
    image: "germany_location.jpg"
  },
  {
    question: "The capital of Germany is Berlin.",
    answer: true,
    feedback: "Correct! Berlin is the capital of Germany.",
    image: "berlin.jpg"
  },
  {
    question: "The official language of Germany is English.",
    answer: false,
    feedback: "Incorrect! The official language of Germany is German.",
    image: "german_language.jpg"
  },
  {
    question: "Germany is known for its Oktoberfest celebration.",
    answer: true,
    feedback: "Correct! Oktoberfest is a famous event in Germany.",
    image: "oktoberfest.jpg"
  },
  {
    question: "Germany has a monarchy system of government.",
    answer: false,
    feedback: "Incorrect! Germany has a federal parliamentary republic.",
    image: "german_flag.jpg"
  },
  {
    question: "The currency of Germany is the Euro.",
    answer: true,
    feedback: "Correct! The Euro is the currency of Germany.",
    image: "euro_currency.jpg"
  },
  {
    question: "Germany has a coastline along the Baltic Sea.",
    answer: true,
    feedback: "Correct! Germany has a coastline along the Baltic Sea.",
    image: "baltic_sea.jpg"
  },
  {
    question: "The Black Forest is a famous mountain range in Germany.",
    answer: true,
    feedback: "Correct! The Black Forest is a popular tourist destination in Germany.",
    image: "black_forest.jpg"
  },
  {
    question: "Germany is the largest country in Europe by land area.",
    answer: false,
    feedback: "Incorrect! Russia is the largest country in Europe by land area.",
    image: "russia_map.jpg"
  },
  {
    question: "Germany is known for its engineering and automotive industry.",
    answer: true,
    feedback: "Correct! Germany is renowned for its engineering and automotive prowess.",
    image: "automotive_industry.jpg"
  },
];

// Global variables
let currentQuestionIndex = 0;
let score = 0;

// Get DOM elements
const questionContainer = document.getElementById("question-container");
const trueButton = document.getElementById("true-btn");
const falseButton = document.getElementById("false-btn");
const feedbackContainer = document.getElementById("feedback-container");
const scoreElement = document.getElementById("score");
const usernameInput = document.getElementById("username");

// Load question
function loadQuestion() {
  const question = quizQuestions[currentQuestionIndex];
  questionContainer.innerHTML = question.question;
  feedbackContainer.innerHTML = "";

  trueButton.disabled = false;
  falseButton.disabled = false;
}

// Check answer
function checkAnswer(answer) {
  const question = quizQuestions[currentQuestionIndex];

  if (answer === question.answer) {
    score++;
    feedbackContainer.style.color = "#00a800";
    feedbackContainer.innerHTML = "Correct!";
  } else {
    feedbackContainer.style.color = "#ff0000";
    feedbackContainer.innerHTML = "Incorrect!";
  }

  // Display image
  const image = document.createElement("img");
  image.src = question.image;
  image.alt = "Image related to the question";
  feedbackContainer.appendChild(document.createElement("br"));
  feedbackContainer.appendChild(image);

  trueButton.disabled = true;
  falseButton.disabled = true;
  scoreElement.innerHTML = score;

  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    setTimeout(loadQuestion, 2000); // Load next question after 2 seconds
  } else {
    questionContainer.innerHTML = "Quiz Completed!";
    questionContainer.style.fontSize = "24px";
    trueButton.style.display = "none";
    falseButton.style.display = "none";
    usernameInput.style.display = "none";
  }
}

// Load initial question
loadQuestion();

// Event listeners for true and false buttons
trueButton.addEventListener("click", () => {
  checkAnswer(true);
});

falseButton.addEventListener("click", () => {
  checkAnswer(false);
});
