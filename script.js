//generates a random number between 1-3 and assings rock paper or scissors depdning on the number
function getComputersChoice() {
    var compNumber = Math.floor(Math.random()* (3 - 1 + 1) + 1)
    console.log(compNumber)
    if (compNumber === 1){
        return "Rock"
    } else if ( compNumber === 2){
        return "Paper"
    } else{
        return "Scissors"
    }
}
console.log(getComputersChoice())

function singleRound(playerSelection, getComputersChoice ){
    var playerSelection = prompt("Would you like Rock, Paper or Scissors?").toLowerCase()
    
    
    if (playerSelection === "rock"){

        if (getComputersChoice === "Rock"){
            return "It's a draw"
        }
        else if (getComputersChoice === "Paper"){
            return "You Lose! Paper beats Rock"
        }
        else{
            return "You Win! Rock beats Scissors"
        }
    }
    else if (playerSelection === "paper"){

        if (getComputersChoice === "Rock"){
            return "You Win! Paper beats Rock"
        }
        else if (getComputersChoice === "Paper"){
            return "It's a draw"
        }
        else{
            return "You Lose! Scissors beats Paper"
        }
    }
    else if (playerSelection === "Scissors"){
        if (getComputersChoice === "Rock"){
            return "You Lose! Rock beats Scissors"
        }
        else if (getComputersChoice === "Paper"){
            return "You Win! Scissors beats Paper"
        }
        else{
            return "It's a draw"
        }
    }
    else{
        return "Invalid selection!"
    }
}


function game(){
    var computerScore = 0
    var playerScore = 0
    for (let i = 0; i < 5 ; i++){
        var winner = singleRound()
        if (winner ===  "You Win! Scissors beats Paper"|| "You Win! Paper beats Rock" ||"You Win! Rock beats Scissors"){
            playerScore++
            console.log(computerScore)
            console.log(playerScore)
        }
        else if (winner === "You Lose! Rock beats Scissors" || "You Lose! Scissors beats Paper" || "You Lose! Paper beats Rock"){
            computerScore++
            console.log(computerScore)
            console.log(playerScore)
        }else{
            console.log(computerScore)
            console.log(playerScore)
        } 
        


    }
    return "the computers score is " + computerScore + " the player score is "+ playerScore
}
console.log(game())