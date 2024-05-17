const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkWinner(){
    if(player == computer){
        return "Draw!";
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ? "You Win!" : "You Lose!"
    }
    else if(computer == "PAPER"){
        return (player == "SCISSOR") ? "You Win!" : "You Lose!"
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "You Win!" : "You Lose!"
    }
}


/*
Breakdown:

    1. Selecting Elements:

        const playerText = document.querySelector("#playerText");
        const computerText = document.querySelector("#computerText");
        const resultText = document.querySelector("#resultText");
        const choiceBtns = document.querySelectorAll(".choiceBtn");
        
        //document.querySelector and document.querySelectorAll are used to select HTML elements and store them in constants.

    2. Variables:

        let player;
        let computer;
        let result;

        //These variables will hold the player's choice, the computer's choice, and the result of the game.

    3. Adding Event Listeners:

        choiceBtns.forEach(button => button.addEventListener("click", () => {
            player = button.textContent;
            computerTurn();
            playerText.textContent = `Player: ${player}`;
            computerText.textContent = `Computer: ${computer}`;
            resultText.textContent = checkWinner();
        }));    

        //forEach iterates over each button and attaches a click event listener.
        //When a button is clicked:
            /player is set to the text content of the clicked button.
            /computerTurn function is called to determine the computer's choice.
            /The text content of playerText, computerText, and resultText is updated to reflect the choices and result.

    4. Random Computer Choice:

        function computerTurn() {
            const randNum = Math.floor(Math.random() * 3) + 1;
            switch(randNum) {
                case 1:
                    computer = "ROCK";
                    break;
                case 2:
                    computer = "PAPER";
                    break;
                case 3:
                    computer = "SCISSORS";
                    break;
            }
        }

        //Generates a random number between 1 and 3.
        //Uses a switch statement to assign computer a choice based on the random number.

    5. Determining the Winner:

        function checkWinner() {
            if (player == computer) {
                return "Draw!";
            }
            else if (computer == "ROCK") {
                return (player == "PAPER") ? "You Win!" : "You Lose!";
            }
            else if (computer == "PAPER") {
                return (player == "SCISSORS") ? "You Win!" : "You Lose!";
            }
            else if (computer == "SCISSORS") {
                return (player == "ROCK") ? "You Win!" : "You Lose!";
            }
        }

        //Compares the player and computer choices to determine the outcome.
        //Uses if-else statements to check for a draw or to determine the winner based on the rules of Rock Paper Scissors.

Fundamental Concepts

    1. DOM Manipulation:

        //Using document.querySelector and document.querySelectorAll to select and manipulate HTML elements.

    2. Event Handling:

        //Adding event listeners to elements to handle user interactions (clicks).

    3. Randomization:

        //Generating random numbers to simulate the computer's choice.

    4. Conditional Logic:

        //Using if-else statements and switch statements to implement game logic and determine the winner.

    5. Template Literals:

        //Using template literals (e.g., `Player: ${player}`) for easier string concatenation and interpolation. 
*/