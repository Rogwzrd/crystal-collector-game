

    var wins = 0;
    var losses = 0;
    var targetScore = 0;
    var currentScore = 0;
    var gems = {
        redGem: 0,
        refreshRedGem: true,
        blueGem: 1,
        refreshBlueGem: true,
        greenGem: 2,
        refreshGreenGem: true,
        purpleGem: 3,
        refreshPurpleGem: true
    };

$(document).ready(function() {

//////////////////////////////////////////////
// global variables
//////////////////////////////////////////////






    $(".red-gem").on("click", function() {
        gems.redGem++;
        console.log(gems.redGem)
    });

    $(".blue-gem").on("click", function() {
        gems.blueGem++;
        console.log(gems.blueGem)
    });
    $(".green-gem").on("click", function() {
        gems.greenGem++;
        console.log(gems.greenGem)
    });
    $(".purple-gem").on("clic", function() {
        gems.purpleGem++;
        console.log(gems.purpleGem)
    });

})