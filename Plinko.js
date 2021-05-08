class Plinko {
    constructor(x,y) {
      var options = {
        restitution:1,
        friction:0,
         isStatic: true
      }
      this.R=10
      this.body=Bodies.circle(x,y,this.r,options)
      World.add(world,this.body)
    }

     display(){

        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        DeviceRotationRate(angle);
        imageMode(CENTER);
        notstroke();
        fill("white")
        ellipswMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
     }
    }