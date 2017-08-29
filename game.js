var wins = 0;
var losses = 0;
var targetScore = Math.floor(Math.random() * 75) + 25;
var currentScore = 0;
var gems = {
    redGem: Math.floor(Math.random() * 13) + 1,
    refreshRedGem: true,
    blueGem: Math.floor(Math.random() * 13) + 1,
    refreshBlueGem: true,
    greenGem: Math.floor(Math.random() * 13) + 1,
    refreshGreenGem: true,
    purpleGem: Math.floor(Math.random() * 13) + 1,
    refreshPurpleGem: true
};

function gameStart() {
	targetScore = Math.floor(Math.random() * 75) + 25;
	currentScore = 0;
}

$(document).ready(function() {

    //////////////////////////////////////////////
    // global variables
    //////////////////////////////////////////////

    $(".red-gem").on("click", function() {
        if (gems.refreshRedGem == true) {
            gems.redGem = Math.floor(Math.random() * 13) + 1;
            gems.refreshRedGem = false;
            console.log(gems.redGem)
        } else if (targetScore > currentScore) {
        	console.log(gems.redGem);
        	currentScore = currentScore + gems.redGem;
        	console.log("my target score is: " + targetScore);
        	console.log("my current score is: " + currentScore)
        } else if (targetScore < currentScore) {
        	losses++;
        	gameStart();
      		alert("Oh shucks! My pickaxe broke!")
        }
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