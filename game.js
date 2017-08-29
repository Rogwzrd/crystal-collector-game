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
    refreshGem: true
};

function gameStart() {
    targetScore = Math.floor(Math.random() * 75) + 25;
    currentScore = 0;
    gems.refreshGem = true;
    console.log('Lookie here, fresh gems!')
}

$(document).ready(function() {

	//this line determines whether or not the value of the gems change
    $(".red-gem").on("click", function() {
        if (gems.refreshGem == true) {
            gems.redGem = Math.floor(Math.random() * 13) + 1;
            gems.refreshGem = false;
            console.log(gems.redGem)
        } 

        //this line runs if your score is below the target score
        if (targetScore > currentScore) {
            console.log(gems.redGem);
            currentScore = currentScore + gems.redGem;
            console.log("my target score is: " + targetScore);
            console.log("my current score is: " + currentScore)
        }

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
        console.log(gems.refreshGem)
    });

    $(".blue-gem").on("click", function() {
        gems.blueGem = Math.floor(Math.random() * 12) + 1;
        console.log(gems.blueGem)
    });
    $(".green-gem").on("click", function() {
        gems.greenGem = Math.floor(Math.random() * 12) + 1;
        console.log(gems.greenGem)
    });
    $(".purple-gem").on("click", function() {
        gems.purpleGem = Math.floor(Math.random() * 12) + 1;
        console.log(gems.purpleGem)
    });

})