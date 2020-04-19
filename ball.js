class Ball{
    constructor(x,y){
    this.body = Bodies.circle(x,y,25);
    this.radius =25;
    World.add(world,this.body);
};
display(){
var pos =this.body.position;
 var angle = this.body.angle;
 //pos.x =mouseX;
push();
translate(pos.x,pos.y);

fill('magenta');
ellipseMode(RADIUS);
ellipse(0,0,30,30);
pop();
}}