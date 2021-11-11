const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

//no need to create extra variable
//var bg = "sunrise1.png";

function preload() {
    // directly load a default image here
    bg=loadImage("sunrise.png")
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    //call function in setup
    getBackgroundImg();

}

function draw(){
     //add image in background
    background(bg)

    Engine.update(engine);
    // write code to display time in correct format here
    fill("black");
    textSize(30);

    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
       }else if(hour==0){
         text("Time : 12 AM",100,100);
       }else{
        text("Time : "+ hour%12 + " AM", 50,100);
       }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    
    // write code slice the datetime
    hour = datetime.slice(11,13);

    if(hour>=0 && hour<18 )
    {
        bg=loadImage("sunrise.png")
    }
    else
    {
        bg=loadImage("sunset.png")
    }
    
    //useless way ignore this
   // backgroundImg = loadImage(bg);
}
