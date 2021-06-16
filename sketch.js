const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow;
var snowFlake;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  snow = new Snow(320,140,800,400);
  snowFlake = new SnowFlake(400,120);
  
}

function draw() {  
  engine = Engine.create();
  world = engine.world;

  background(255,255,255); 


  snow.display();
  snowFlake.display();


  drawSprites();
}
