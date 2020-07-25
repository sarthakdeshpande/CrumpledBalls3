const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paperObject;
var dustbin;
var ground;

function setup() {
  createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;
  
	ground1 = new Ground(600,height,1200,20);
	dustbin1 = new Dustbin();

  paperObject = new Paper(250,300);
  rope = new Rope(paperObject.body,{x:250, y:300});

}

function draw() {
  rectMode(CENTER);
  background(150);
  Engine.update(engine)
 
 
  ground1.display();
  paperObject.display();
  dustbin1.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(paperObject.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  rope.fly();
}



