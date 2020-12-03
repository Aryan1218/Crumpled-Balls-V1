class Paper{
constructor(x,y,radiuswidth,height){
    var options={
        isStatic = false,
        restitution:0.3,
        friciton:0.5,
        density:1.2
    }
this.body = Bodies.circle(x,y,width,height,options)
this.radius  = radius;
World.add(world,this.body)




display();{
    var pos = this.body.position
    rectMode(CENTER)
    fill("red")
    circle(pos.x,pos.y, this.width, this.height)
    pop();
}

function keypressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyforce(paper.body,paper.body.pos({x:85,y:85})

    }





}








}
 




}