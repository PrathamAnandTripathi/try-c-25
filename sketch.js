
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var line1,line2,line3
var ball,ball_img
var dustbin_img,dustb

function preload()
{
	ball_img = loadImage(paper.png);
	dustbin_img = loadImage(dustbingreen.png);
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:false} );
	World.add(world, ground);

	line1 = new dustbin(600,700,50,200);
	line2 = new dustbin(650,700,200,50);
	line3 = new dustbin(700,700,50,200);

	dustb = new dustbin(650,700,50,200);
	dustb.addImage(dustbin_img);
  
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  line1.display();
  line2.display();
  line3.display();
  ball.display();
  dustb.display();
  drawSprites();
 
}

function keyPressed (){

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}

