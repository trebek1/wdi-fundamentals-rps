////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//x   'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
    
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var move = 'rock'; 

function getPlayerMove(move) {
    //if move is undefine or null, move is set to getInput() else, use the move and print to screen
    if(move==='undefined' || move===null){
        move = getInput();
        playerMove = move; 
        console.log(move);
        return playerMove;
    }else
    {
        playerMove = move; 
        console.log (move);
        return playerMove;
    }
}
function getComputerMove(move) {
    //if move is undefine or null, move is set to randomPlay() else, use the move and print to screen
    if(move ==='undefined' || move === null){
        move = randomPlay();
        computerMove = move; 
        console.log(move);
        return computerMove;
    }
    else {
        console.log(move);
        computerMove = move; 
        return computerMove;
    }
}       

function getWinner(playerMove,computerMove) {
    var winner;
    var playerMove = 'scissors'; 
    var computerMove = 'rock';
    
    switch(playerMove){
        case "rock":
            if(computerMove ==='rock'){
                winner = 'tie';
            }else if(computerMove ==='paper'){
                winner = 'computer';
            }else if( computerMove ==='scissors'){
                winner = 'player';
            }
            break; 
        case "paper":
            if(computerMove ==='rock'){
                winner = 'player';
            }else if(computerMove ==='paper'){
                winner = 'tie';
            }else if( computerMove ==='scissors'){
                winner = 'computer';
             }break; 
        case "scissors":
            if(computerMove ==='rock'){
                winner = 'computer';
            }else if(computerMove ==='paper'){
                winner = 'player';
            }else if( computerMove ==='scissors'){
                winner = 'tie';
            }
            break; 
     }
   
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

