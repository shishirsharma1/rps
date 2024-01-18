
let player = document.querySelector('#playerSign');
let computer = document.querySelector('#computerSign')
let rockBtn = document.querySelector('#rock-btn');
let paperBtn = document.querySelector('#paper-btn')
let scissorBtn = document.querySelector('#scissor-btn');
let playerScoreBoard = document.querySelector('#playerScore');
let computerScoreBoard = document.querySelector('#computerScore');
let scoreText = document.querySelector('#score-text');
let playerScoreCard = document.querySelector('#player');
let computerScoreCard = document.querySelector('computer');


/*SCORES*/
let playerScore = 0;
let computerScore = 0;


/* This function gets a random computer choice and updates its content*/
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            computer.textContent = '✊';
            return 'ROCK';
        case 1:
            computer.textContent = '✋';
            return 'PAPER';
        case 2:
            computer.textContent = '✌';
            return 'SCISSORS';
    }

}


/* This function plays a round of rps and updates the scores and the scoreboards*/

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' ||
        playerSelection === 'SCISSORS' && computerSelection === 'PAPER' ||
        playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        playerScore += 1;
        playerScoreBoard.textContent = `Player: ${playerScore}`;
        scoreText.textContent = 'You Win';
        
    }
    else if(playerSelection === 'ROCK' && computerSelection ==='PAPER' ||
    playerSelection == 'SCISSORS' && computerSelection =='ROCK' ||
    playerSelection == 'PAPER' && computerSelection =='SCISSORS'){
        computerScore++;
        computerScoreBoard.textContent = `Computer: ${computerScore}`;
        scoreText.textContent = 'You Lose';

    }
    else if(playerSelection===computerSelection){
        scoreText.textContent = 'Tie';
    }
    



    if(playerScore === 5){
        alert(`Game Over
You Win  
Player Score:${playerScore}, Computer Score:${computerScore}`);
        location.reload();
    }
    else if (computerScore === 5){
        alert(`Game Over
You Lose 
Player Score:${playerScore}, Computer Score:${computerScore}`);
        location.reload();
    }
    else if (computerScore === playerScore === 5){
        alert(`Game Over
Tie 
Player Score:${playerScore}, Computer Score:${computerScore}`);
        location.reload
    }

}


/* Event listeners for all the buttons that play a round of rock paper scissor when clicked*/
rockBtn.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    player.textContent = '✊';
    let playerSelection = 'ROCK';
    playRound(playerSelection, computerSelection)

});

paperBtn.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    player.textContent = '✋';
    let playerSelection = 'PAPER';
    playRound(playerSelection, computerSelection)

});

scissorBtn.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    player.textContent = '✌';
    let playerSelection = 'SCISSORS';
    playRound(playerSelection, computerSelection)

});

































// rockBtn.addEventListener('click', () => {
//     player.textContent = '✊';
//   });

// paperBtn.addEventListener('click', () => {
//     player.textContent = '✋';
//   });

// scissorBtn.addEventListener('click', () => {
//     player.textContent = '✌';
//   });

