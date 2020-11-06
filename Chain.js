class Chain{
    constructor(bodyA, bodyB){
        var property = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 20
        };
    this.chain = Constraint.create(property);
    World.add(world, this.chain);
    };
    display(){
    var pointA= this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
};