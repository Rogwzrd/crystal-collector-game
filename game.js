//////////////////////////////////////////////
// global variables
//////////////////////////////////////////////

var wins = 0;
var losses = 0;
var targetScore = Math.floor(Math.random() * 75) + 25;
var currentScore = 0;
var gems = {
    redGem: Math.floor(Math.random() * 13) + 1,
    blueGem: Math.floor(Math.random() * 13) + 1,
    greenGem: Math.floor(Math.random() * 13) + 1,
    purpleGem: Math.floor(Math.random() * 13) + 1,
    refreshRedGem: true,
    refreshBlueGem: true,
    refreshGreenGem: true,
    refreshPurpleGem: true
};

function gameState() {
    //this line determines whether a game is won or lost on click
    if (targetScore < currentScore) {
        losses++;
        gameStart();
        alert("Oh shucks! My pickaxe broke!")

    }
    //this line runs if your target score and the current score match
    if (targetScore === currentScore) {
        wins++;
        gameStart();
        alert("We're gonna be rich!")
    }
}

function gameStart() {
    targetScore = Math.floor(Math.random() * 75) + 25;
    currentScore = 0;
    gems.refreshRedGem = true;
    gems.refreshBlueGem = true;
    gems.refreshGreenGem = true;
    gems.refreshPurpleGem = true;
    console.log('Lookie here, fresh gems!')
}

$(document).ready(function() {

    //this line determines whether or not the value of the gems change
    $(".red-gem").on("click", function() {
        if (gems.refreshRedGem === true) {
            gems.redGem = Math.floor(Math.random() * 13) + 1;
            gems.refreshRedGem = false;
            console.log(gems.redGem)
        }

        //this line runs if your score is below the target score
        if (targetScore > currentScore) {
            console.log(gems.redGem);
            currentScore = currentScore + gems.redGem;
            console.log("my target score is: " + targetScore);
            console.log("my current score is: " + currentScore)
        }
        gameState();
    });

    $(".blue-gem").on("click", function() {
        if (gems.refreshBlueGem === true) {
            gems.blueGem = Math.floor(Math.random() * 13) + 1;
            gems.refreshBlueGem = false;
            console.log(gems.blueGem)
        }

        //this line runs if your score is below the target score
        if (targetScore > currentScore) {
            console.log(gems.blueGem);
            currentScore = currentScore + gems.blueGem;
            console.log("my target score is: " + targetScore);
            console.log("my current score is: " + currentScore)
        }
        gameState();
    });

    $(".green-gem").on("click", function() {
        if (gems.refreshGreenGem === true) {
            gems.greenGem = Math.floor(Math.random() * 13) + 1;
            gems.refreshGreenGem = false;
            console.log(gems.greenGem)
        }

        //this line runs if your score is below the target score
        if (targetScore > currentScore) {
            console.log(gems.greenGem);
            currentScore = currentScore + gems.greenGem;
            console.log("my target score is: " + targetScore);
            console.log("my current score is: " + currentScore)
        }
        gameState();
    });

    $(".purple-gem").on("click", function() {
        if (gems.refreshPurpleGem === true) {
            gems.purpleGem = Math.floor(Math.random() * 13) + 1;
            gems.refreshPurpleGem = false;
            console.log(gems.purpleGem)
        }

        //this line runs if your score is below the target score
        if (targetScore > currentScore) {
            console.log(gems.purpleGem);
            currentScore = currentScore + gems.purpleGem;
            console.log("my target score is: " + targetScore);
            console.log("my current score is: " + currentScore)
        }
        gameState();
    });

    console.log(gems.refreshGem)

})