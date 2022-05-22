let userLives = 5;
let cpuLives = 5;


function computerPlay() {
            const choices = ['Rock', 'Paper', 'Scissors'];
            let selection = Math.ceil(Math.random() * 3) - 1;
            return choices[selection];
        }

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay()

    // Immediately check for tie
    if (playerSelection === computerSelection.toLowerCase()) {
        return 'Tie';
    }
    
    if (playerSelection === 'rock') {
        if (computerSelection === 'Paper') {
            userLives--;
            return 'You Lost! Paper beats Rock';
        }
        else {
            cpuLives--;
            return 'You Won! Rock beats Scissors';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'Rock') {
            cpuLives--;
            return 'You Won! Paper beats Rock';
        }
        else {
            userLives--;
            return 'You Lost! Paper Losts to Scissors';
        }
    }
    // Only remaining option is playerSelection === 'scissors'
    else {
        if (computerSelection === 'Rock') {
            userLives--;
            return 'You Lost! Rock beats Scissors';
        }
        else if (computerSelection === 'Paper') {
            cpuLives--;
            return 'You Won! Scissors beats Paper';
        }
        else {
            return 'Tie! Scissors ties with Scissors';
        }
    }
}

function handleMove(button) {
    let playerMove = button.id.replace('Btn', ''); // Converts move to one of ('rock', 'paper', 'scissors)
    let result = playRound(playerMove);
    updateLives();

    const resultElement = document.querySelector('.results')
    resultElement.textContent = result;

    if (result.includes('You Won')) resultElement.style.color = 'rgba(0, 175, 62, 1)';
    else if (result.includes('You Lost!')) resultElement.style.color = 'red';
    else resultElement.style.color = 'white';

    if (!userLives || !cpuLives) {
        console.log('Game Over')
        showEndGame();
    };
}


function updateLives() {
    const userLivesElement = document.querySelector('#user-lives');
    const cpuLivesElement = document.querySelector('#cpu-lives');

    userLivesElement.textContent = '💙'.repeat(userLives);
    cpuLivesElement.textContent = '💙'.repeat(cpuLives);
}


function resetGame() {
    userLives = 5;
    cpuLives = 5;
    const resultElement = document.querySelector('.results')
    resultElement.textContent = '';
    updateLives();
}

function showEndGame() {
    const endGameMessage = document.querySelector('#final-result');
    
    endGameMessage.textContent = (!userLives) ? 'You Lost!' : 'You Won!';

    modal.showModal();
}


const playerButtons = [...document.querySelectorAll('.choices-box .btn')];
playerButtons.forEach((button) => button.addEventListener('click', () => handleMove(button)));

const closeModal = document.querySelector('[data-close-modal]');
const modal = document.querySelector('[data-modal-new]');

closeModal.addEventListener('click', () => modal.close());

// Allow modal to close on click outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.close();
        resetGame();
    }
});

closeModal.addEventListener('click', resetGame);