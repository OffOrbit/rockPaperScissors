/*
I am making a game of Rock Paper Scissors and the
first thing I need to do is create a function that
will generate a random response of either, Rock,
Paper, or Scissors.*/

/*
This function will be called 'getComputerChoice' and
will return one of the three choices of RPS. */

/*In order to get the return string value of RPS, I
will create a function  */

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);

    var option;
    if (randomNumber === 0) {
        option = "rock";
    } else if (randomNumber === 1) {
        option = "paper";
    } else {
        option = "scissors";
    }

    return option;

}


var randomOption = getComputerChoice();
console.log("Randomly generated option: " + randomOption);