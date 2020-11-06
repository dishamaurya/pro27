var roof,chain;
var bob1,bob2,bob3,bob4,bob5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(325,100,250,20);

	bob1 = new Ball(200,300,55);
	bob2 = new Ball(260,300,55);
	bob3 = new Ball(320,300,55);
	bob4 = new Ball(380,300,55);
	bob5 = new Ball(440,300,55);

	chain = new Chain(bob1.body,roof.body,this.r*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  roof.display();
  chain.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}



