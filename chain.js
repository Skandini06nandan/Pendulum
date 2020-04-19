class Chain{
    constructor(bodyA, bodyB){
    var options={
        bodyA: constrainedBall,
        bodyB : brick,
        stiffness :0.004,
        length :70
    }
this.Chain = Constraint.create(options);
World.add(world,this.Chain);
}
display(){
     var bodyA = this.Chain.bodyA.position;
     var bodyB = this.Chain.bodyB.position;

    strokeWeight(6);
    stroke('blue');
line(bodyA.x,bodyA.y,bodyB.x,bodyB.y);
}
};
//body b=  brick nd bodyA= ball
