
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash1, trash2, trash3, ground, paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paper = new Paper(375,50,25)
	ground = new Ground(360,375,400,20)
	trash1 = new Trash(200,380,200,20)
	trash2 = new Trash(170,360,20,100)
	trash3 = new Trash(230,360,20,100)
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  trash1.display();
  trash2.display();
  trash3.display();
  
  drawSprites();
 
}



