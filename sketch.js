const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var stone;
var ground;
var sling;
var gameState = "onSling";	
var mango1, mango2, mango3,mango4,mango5;

function preload(){
	boy=loadImage("boy.png");
	tree=loadImage("tree.png");
}

function setup() {
	createCanvas(1366, 653);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stone = new Stone(235,420,30);
	ground = new Ground(200,600,2500,10);
	sling = new Sling(stone.body,{x:230, y:430});

	mango1 = new Mango(1200,200,30);
	mango2 = new Mango(1100,200,30);
	mango3 = new Mango(1070,290,30);
	mango4= new Mango(1150,263,30);
	mango5= new Mango(1280,270,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  image(boy,200,340,200,300);
  image(tree,950,100,400,500);
  Engine.update(engine);

  console.log(mouseX);
  console.log(mouseY);

  stone.display();
  ground.display();
  sling.display();	
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
}

function keyPressed(){
	if (keyCode === 32 && gameState === "launched"){
		Matter.Body.setPosition(stone.body,{x:234,y:420});
		sling.attach(stone.body);
		gameState = "onSling";
	}
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    sling.fly();
    gameState = "launched";
}

function detectollision(lstone,lmango){
	mangoBody=lmango.body.position;
	stoneBody=lstone.body.position;

	var distance =dist(stoneBody.x,stoneBody.y,mangoBody.x,mangoBody.y);

	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}