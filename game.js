var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    var index = userClickedPattern.length - 1;
    checkAnswer(index);
})

function nextSequence(){
    level++;
     $("#level-title").text("level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);

}


$(document).on("keypress",function(){
    if (!started){
        started = true;
        nextSequence();
    }
});


function playSound(name){
     var colorSound = new Audio("sounds/" + name + ".mp3");
     colorSound.play();
}

function animatePress(currentColour){
    $(".btn." + currentColour).addClass("pressed");

    setTimeout(function(){
        $(".btn." + currentColour).removeClass("pressed");}, 100);
}

function checkAnswer(currentLevel1){
    if (gamePattern[currentLevel1] !== userClickedPattern[currentLevel1]){
        var wrongAudio = new Audio("sounds/wrong.mp3");
        wrongAudio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200)
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOVer();
        return;
    }

    if (gamePattern.length === userClickedPattern.length){
       setTimeout(function(){
        userClickedPattern = [];
        nextSequence();
       }, 1000) 
    }
}

function startOVer(){
        gamePattern = [];
        level = 0;
        started = false;
        userClickedPattern = [];
    }