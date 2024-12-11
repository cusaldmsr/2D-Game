
//Run Start
var runStart = 0;

//Sounds Variables
var runSound = new Audio("run.mp3");
runSound.loop = true;
var jumpSound =new Audio("jump.mp3");
var deadSound = new Audio("dead.mp3");
var gameOverSound = new Audio("Cipher2.mp3");


//Key Check Function
function keyCheck(event){

    //Enter Key
    if(event.which==13){

        //Start Screen Hidden
        document.getElementById("startScreen").style.visibility = "hidden";

        //RunWorker 
        if(runWorkerId==0){
            runWorkerId = setInterval(run, 100);
            runStart = 1;
            runSound.play();
            backgroundWorkerId = setInterval(moveBackground, 100);
            scoreWorkerId = setInterval(updateScore, 100);
            blockWorkerId = setInterval(createBlock, 1000);
            moveBlockWorkerId = setInterval(moveBlocks, 100);
        }
        
    }

    //Space Key
    if(event.which==32){
        if(runStart==1){
            if(jumpWorkerId==0){
                clearInterval(runWorkerId);
                runSound.pause();

                runWorkerId = -1;
                jumpWorkerId = setInterval(jump, 100);
                jumpSound.play();
            }
        }
    }
}

//Run Function >>===> globle variables
var player = document.getElementById("player");
var runImageNumber = 1;
var runWorkerId = 0;

//Run Function
function run(){
    runImageNumber++;

    if(runImageNumber == 11){
        runImageNumber = 1;
    }

    player.src = "Run/Run ("+runImageNumber+").png";
}

//Jump Function >>===> globle variables
var jumpImageNumber = 1;
var jumpWorkerId = 0;
var playerMarginTop = 550;

//Jump Function
function jump(){
    jumpImageNumber++;

    if(jumpImageNumber<=6){
        playerMarginTop = playerMarginTop - 40;
        player.style.marginTop = playerMarginTop + "px";   
    }

    if(jumpImageNumber>=7){
        playerMarginTop = playerMarginTop + 40;
        player.style.marginTop = playerMarginTop + "px";   
    }

    if(jumpImageNumber == 11){
        jumpImageNumber = 1;
        clearInterval(jumpWorkerId);
        runWorkerId = setInterval(run, 100);
        runSound.play();

        jumpWorkerId = 0;
    }
    player.src = "Jump/Jump"+jumpImageNumber+".png";
}

//Move Background Function >>===> globle variables
var background = document.getElementById("background");
var backgroundX = 0;
var backgroundWorkerId = 0;

//Move Background Function
function moveBackground(){

    backgroundX = backgroundX - 20;
    background.style.backgroundPositionX = backgroundX + "px";

}

//update Score Function >>===> globle variables
var score = document.getElementById("score");
var newScore = 0;
var scoreWorkerId = 0;

//update Score Function
function updateScore(){
    newScore++;

    score.innerHTML = newScore;
}

//Create Block Function >>===> globle variables
var blockMarginLeft = 0;
var blockWorkerId = 0;
var blockId = 1;

//Create Block Function
function createBlock(){

    var block = document.createElement("div");

    block.className = "block";
    block.id = "block" + blockId;
    blockId++;

    //Random creation of blocks
    var gap = Math.random()*(1000-400) + 400; 
    blockMarginLeft = blockMarginLeft + gap

    block.style.marginLeft = blockMarginLeft + "px";

    background.appendChild(block);
}

//Move  Blocks Function >>===> globle variables
var moveBlockWorkerId = 0;

//Move  Blocks Function
function moveBlocks(){
    for(var i = 1; i <= blockId; i++){
        var currentBlock = document.getElementById("block" + i);
        var currentMarginLeft = currentBlock.style.marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 20;
        currentBlock.style.marginLeft = newMarginLeft + "px";

        //alert(newMarginLeft);//160 - 40
        if(newMarginLeft<160){
            if(newMarginLeft>40){
                if(playerMarginTop<=550){
                    if(playerMarginTop>510){
                        clearInterval(runWorkerId);
                        clearInterval(jumpWorkerId);
                        runSound.pause();

                        jumpWorkerId = -1;
                        clearInterval(backgroundWorkerId);
                        clearInterval(blockWorkerId);
                        clearInterval(moveBlockWorkerId);
                        clearInterval(scoreWorkerId);

                        deadWorkerId = setInterval(dead, 100);
                        deadSound.play();
                    }
                }
            }
        }
    }
}

//Dead Image Function  >>===> globle variables
var deadImageNumber = 1;
var deadWorkerId = 0;

//Dead Image Function
function dead(){
    
    deadImageNumber++;

    if(deadImageNumber == 10){

        clearInterval(deadWorkerId);
        runSound.pause();

        player.style.marginTop = "550px";
        document.getElementById("gameOver").style.visibility = "visible";
        gameOverSound.play();
        document.getElementById("endST").innerHTML = "Your Score - " + newScore;
    }
    player.src = "Dead/Dead "+deadImageNumber+".png"; 

}

//reload Function
function reload(){
    location.reload();
}
