//Namespacing of the physics engine modules
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var ground;
var box1, box2;

function setup() {
  createCanvas(800,800);

  //creating physics engine
  myEngine = Engine.create();
  //naming the world created by the engine
  myWorld = myEngine.world;

  ground = new Ground(400, 790, 800, 10);

  box1 = new Box(300,400,60,80);
  box2 = new Box(340,300,60,60);

}

function draw() {
  background(0);
  
  //regularly update the physics engine
  Engine.update(myEngine);

  ground.display();

  box1.display();
  box2.display();

}