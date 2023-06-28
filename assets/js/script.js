let buttons = document.querySelectorAll('.btn');
let result = document.getElementById('result');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let playerSelection = button.id;
    let computerSelection = computerPlay();
    let gameResult = playRound(playerSelection, computerSelection);
    result.textContent = gameResult;
  });
});

function computerPlay() {
  let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && (computerSelection === 'scissors' || computerSelection === 'lizard')) || 
    (playerSelection === 'paper' && (computerSelection === 'rock' || computerSelection === 'spock')) ||
    (playerSelection === 'scissors' && (computerSelection === 'paper' || computerSelection === 'lizard')) ||
    (playerSelection === 'lizard' && (computerSelection === 'paper' || computerSelection === 'spock')) ||
    (playerSelection === 'spock' && (computerSelection === 'rock' || computerSelection === 'scissors'))
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}