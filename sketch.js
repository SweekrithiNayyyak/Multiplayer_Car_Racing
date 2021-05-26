var ball;
var  database;
var gameState=0;
var playerCount;
var allPlayers;
var form, player,game;

function setup(){
    createCanvas(windowWidth,windowHeight);
    database= firebase.database();
   game= new Game();
   game.getState();
   game.start()
}

function draw(){
    if(playerCount===4){
        game.updateState(1)
    }
   if(gameState===1){
       clear();
       game.play();
   }
    drawSprites();
}

