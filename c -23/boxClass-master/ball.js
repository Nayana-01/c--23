class  Ball{
    constructor (x, y, width, height){
var option = {
    restitution:1
}
    this.body = Bodies.rectangle(x, y, width, height, option)
    this.w = width
    this.h = height
    World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push ();
        translate(pos.x, pos.y)
        rotate (this.body.angle);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h)
        pop ();
    }
}
