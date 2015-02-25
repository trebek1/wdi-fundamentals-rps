//Written by Alex Trzeciak 2/25 
////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
    
'use strict';

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

var playerMove, computerMove, move; 

function getPlayerMove(move) {
    //if move is undefined or null, move is set to getInput() else, use the move and print to screen
    move = move || 10; 
    if(move === 10){
        move = getInput();
        playerMove = move; 
        move = null; 
        return playerMove;
    }else
    {
       playerMove = move;
       move = null; 
        return playerMove;
    }
}
function getComputerMove(move) {
    //if move is undefine or null, move is set to randomPlay() else, use the move and print to screen
    move = move || 10; 
    if(move === 10){
        move = randomPlay();
        computerMove = move;
        move = null; 
        return computerMove;
    }
    else {
        computerMove = move;
        move = null; 
        return computerMove;
    }
}   

function getWinner(playerMove,computerMove) {
    // This function should either give us back 'player', 'computer', or 'tie'.
    // The rules of the game are that rock beats scissors, scissors beats paper, and paper beats rock.
    // Assume that the only possible input values we can get are 'rock', 'paper', and 'scissors'.
    
    var winner;
    
    switch(playerMove){
        case 'rock':
            if(computerMove ==='rock'){
                winner = 'tie';
            }else if(computerMove ==='paper'){
                winner = 'computer';
            }else if( computerMove ==='scissors'){
                winner = 'player';
            }
            break; 
        case 'paper':
            if(computerMove ==='rock'){
                winner = 'player';
            }else if(computerMove ==='paper'){
                winner = 'tie';
            }else if( computerMove ==='scissors'){
                winner = 'computer';
             }
             break; 
        case 'scissors':
            if(computerMove ==='rock'){
                winner = 'computer';
            }else if(computerMove ==='paper'){
                winner = 'player';
            }else if( computerMove ==='scissors'){
                winner = 'tie';
            }
            break; 
     }
     return winner; 
}

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

function playToFive(){
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    // This function should continue to play Rock Paper Scissors until either the player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played what, who won, and what the current scoreboard looks like.
    // For example,
    //  console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    //  console.log("The score is currently " + playerWins + " to " + computerWins + "\n");

while(playerWins <5 && computerWins<5){
    
    getPlayerMove(move);
    getComputerMove(move);
    getWinner(playerMove,computerMove); 
     console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    
    if(getWinner(playerMove,computerMove)==='computer'){
        computerWins++;
        console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    }else if(getWinner(playerMove,computerMove)==='player'){
        playerWins++; 
        console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    }
}    
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    
    return [playerWins, computerWins];
}

playToFive(); 



