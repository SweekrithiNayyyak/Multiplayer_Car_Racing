var ball;
var  database;
var gameState=0;
var playerCount;
var allPlayers;
var form, player,game;
var car1,car2,car3,car4;
var cars=[];
var car1Image,car2Image,car3Image,car4Image
var trackImage,groundImage;

function preload(){
    car1Image=loadImage("../images/car1.png");
    car2Image=loadImage("../images/car2.png");
    car3Image=loadImage("../images/car3.png");
    car4Image=loadImage("../images/car4.png");
    trackImage=loadImage("../images/track.jpg");
    groundImage=loadImage("../images/ground.png");

}
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
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
       drawSprites();
   }
   if(gameState===2){
       game.end();
   }
    
}

