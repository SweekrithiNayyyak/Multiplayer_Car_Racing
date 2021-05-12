var ball;
var  database;

function setup(){
    createCanvas(500,500);
    database= firebase.database();
    //point to the concerned location in database
    var locOfChild = database.ref('ball/position');
    //create a listner
    locOfChild.on("value", readPosition,showError)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x': ball.x+x,
        'y': ball.y+y

    })
   
}
function readPosition(data){
    var pos = data.val();
    console.log(pos);
    ball.x=pos.x;
    ball.y=pos.y;

}

function showError(){
    console.log("error has occured");
}