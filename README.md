# Psychic-Game


## Screen Shot
<img src="assets/images/Screen.png" alt="screenshot">

## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Javascript - allows dynamic interaction between user and computer data entry
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages

## Summary
This application practices wireframing a bunch of boxes

## Code Snippet
'''html

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Psychic-Game</title>

</head>

<body>

    <div>
        <h1>The Psychic Game</h1>

        <p>Guess what letter I am thinking of?</p>

        <p id="userchoice-text"></p>

        <p id="computerchoice-text"></p>

        <p id="wins-text"></p>
##Code Snippet

'''javascript
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
## Author Links
[GitHub](https://github.com/flexsant)