//Creates an array that lists all the options in game
// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Creates variables to hold number of wins, losses, guesses left, and total guesses
var wins = 0;
var losses = 0;
var left = 10;
var letterBank = ["a"];

//wins, loss, guesses left, guesses so far id displayed on screen
var userDisplayed = document.getElementById("userchoice-text");
var computerChoice = document.getElementById("computerchoice-text");
var winsDisplayed = document.getElementById("wins-text");
var lossesDisplayed = document.getElementById("losses-text");
var guessesLeftDisplayed = document.getElementById("left-text");
var lettersGuessedDisplayed = document.getElementById("total-text");


// Random computer choice, comp must keep same letter
var computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log("letter picked;", computerRandom)

// Program runs whenever user enters data currently registers as 0
document.onkeyup = function (event) {

    // User data entry , create a filter to validation
    var user = event.key;
    // User data stored in an empty array and displayed in browser with 
    if (letterBank.includes(user)) {
        alert("You've already tried this letter, Try a new guess!");
    }
    else {letterBank.push(user)

    console.log("letter picked;", user)

    // User data wins or losses gets recorded 
    if (user === computerRandom) {
        wins++;
        computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        left = 10;
    }
    else {
        left--;
        if (left === 0) {
            losses++;
            computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            left = 10;
        }


    }

    
}







    // Diplays the use and computer guesses, along with wins, losses, toal and remaining guesses
    userDisplayed.textContent = "You chose the letter: " + user;
    // computerChoice.textContent = "Computer chose the letter: " + computerRandom;
    winsDisplayed.textContent = wins;
    lossesDisplayed.textContent = losses;
    guessesLeftDisplayed.textContent = "You have: " + left + " guesses remaining";
    lettersGuessedDisplayed.textContent = "Your guesses: " + letterBank;

};




// Guesses Left: (# of guesses left. This will update)


// Letters you've guessed So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)


// Increase the Wins counter and start the game over again (without refreshing the page).


// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).