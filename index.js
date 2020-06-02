let buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var inputPattern = [];
var gameStatus = 0;
function generateRandom(min , max) {
    var random = Math.random() * (max - min) + min;
    random = Math.floor(random);
    return random;
}
function nextSequence() {
    var rdnColourIndex = generateRandom(0,4);
    gamePattern.push(rdnColourIndex);
    flashButton(buttonColors[rdnColourIndex]);
}
function flashButton(color) {
    $(`div.btn.${color}`).fadeOut(100).fadeIn(100);
}
function showError() {
    console.log(`Game Over`);

    $("body").toggleClass("game-over");
    setTimeout(() => {
        $("body").toggleClass("game-over");
        gameStatus = 0;
    }, 200);
}
function checkSequence(color) {
    console.log(`Checking Sequence ${color}`);
    var index = buttonColors.indexOf(color);
    inputPattern.push(index);
    var lastGeneratedIndex = gamePattern[gamePattern.length-1];
    if (!lastGeneratedIndex || lastGeneratedIndex != index) showError();
    else nextSequence();
}
$(document).ready(function () {
    $(document).keydown(function (e) { 
        // $(document).unbind("keydown");
        if (gameStatus == 0) gamePattern = [];
        nextSequence();
    });
    $("div.btn").click(function (e) { 
        checkSequence($(this).attr("id"));
        $(this).fadeOut(100).fadeIn(100);
    });
});


