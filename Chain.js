class Chain {

    constructor(bodyA, bodyB) {

        var options = {

            bodyA: bodyA,
            bodyB: bodyB,
            length: 25,
            stiffness: 0.5

        }

        this.chain = Matter.Constraint.create(options);
        World.add (world, this.chain);

    }

    display() {
        
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        push();
        stroke ("blue");
        strokeWeight (3);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
        pop();

    }

}