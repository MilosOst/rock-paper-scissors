function computerPlay() {
            const choices = ['Rock', 'Paper', 'Scissors'];
            let selection = Math.ceil(Math.random() * 3) - 1;
            return choices[selection];
        }

        function playRound(playerSelection, computerSelection) {
            playerSelection = playerSelection.toLowerCase();

            // Immediately check for tie
            if (playerSelection === computerSelection.toLowerCase()) {
                return 'Tie';
            }
            
            if (playerSelection === 'rock') {
                if (computerSelection === 'Paper') {
                    return 'You Lose! Paper beats Rock';
                }
                else {
                    return 'You Win! Rock beats Scissors';
                }
            }
            else if (playerSelection === 'paper') {
                if (computerSelection === 'Rock') {
                    return 'You Win! Paper beats Rock';
                }
                else {
                    return 'You Lose! Paper loses to Scissors';
                }
            }
            // Only remaining option is playerSelection === 'scissors'
            else {
                if (computerSelection === 'Rock') {
                    return 'You Lose! Rock beats Scissors';
                }
                else if (computerSelection === 'Paper') {
                    return 'You Win! Scissors beats Paper';
                }
                else {
                    return 'Tie! Scissors ties with Scissors';
                }
            }
        }

        function game() {
            let userScore = 0;
            let cpuScore = 0;

            for (let i = 0; i < 5; i++) {
                let userChoice = prompt('Choose one of: Rock, Paper, Scissors');
                let result = playRound(userChoice, computerPlay());
                console.log(result);

                if (result.includes('You Win!')) {
                    userScore++;
                }
                else if (result.includes('You Lose!')) {
                    cpuScore++;
                }
            }

            // Calculate final results
            if (userScore > cpuScore) {
                console.log(`You won ${userScore} to ${cpuScore}`);
            }
            else if (userScore === cpuScore) {
                console.log(`You tied ${userScore} to ${userScore}`);
            }
            else {
                console.log(`You lost ${cpuScore} to ${userScore}`);
            }
        }