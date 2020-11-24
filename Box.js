class Box {
  constructor(x, y, width, height, angle) {
    var options = {
        'restitution':0,
        'friction':0,
        'density':0.5
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    //var angle = this.body.angle;
    var pos = this.body.position;
    push();
    rect(pos.x,pos.y,this.width,this.height);
    rectMode(CENTER);
    //rotate(angle);
    pop();
  }
}