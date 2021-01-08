class Mango{
    constructor(x, y, r) {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.x=x
        this.y=y
        this.r=r
        this.body = Bodies.circle(x, y, r/2, options);
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image, 0, 0, this.r*2,this.r*2);
        pop();
      }
}