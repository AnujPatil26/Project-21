
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var left;
var right;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,650,800,20);
	left = new Ground(500,610,20,100);
	right = new Ground(700,610,20,100);
	var ball_options = {
		restitution:0.5,
		density:1.2
	}
	ball = Bodies.circle(200,200,20,ball_options);
	World.add(world,ball);

	Engine.run(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  left.show();
  right.show(); 

  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,{x: 0,y: 0},{x: 15,y: -40})
	}
}

