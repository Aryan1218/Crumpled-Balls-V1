
class Trash{
    constructor(){
        var options={
            isStatic:true
            

    }
   
    this.body = Bodies.rectangle(200,20,50,50,options)
    World.add(world,this.body)

    display()
    var pos = this.body.position
    rectMode(CENTER)
    fill("red")
    rect(pos.x,pos.y, this.width, this.height)
    
    
  
}


}

