var ball;
var database,position,movingball;

function setup(){
    // connecting to a database
    database=firebase.database();
    createCanvas(500,500);
    ballposition = createSprite(250,250,10,10);
    ballposition.shapeColor = "red";
    var movingballposition = database.ref('ball/position');
    movingballposition.on("value",readposition,showerror);
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
        'x':position.x+x,'y':position.y+y
    });
     
}
function readposition(data){
position=data.val();
ballposition.x=position.x;
ballposition.y=position.y;
}
function showerror(){
    console.log("welcome to database");

}