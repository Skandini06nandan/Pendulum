const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint;

var engine, world;
var constrainedBall;
var brick;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    constrainedBall = new Ball(230,180,80,PI/2);

    brick = createSprite(200,40,160,30);
    brick.shapeColor =("brown");

    Chain =new Chain(constrainedBall.body,{x:200,y:50});

}

function draw(){
    background(255,320,0);

    Engine.update(engine);
   
    constrainedBall.display();
    Chain.display();


drawSprites();
}
 function keyPressed(){
        if (keyCode === 32){
            constrainedBall.x =mouseX;
            constrainedBall.y =mouseY;
        }
    }