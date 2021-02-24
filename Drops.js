class Rainfall {

    constructor(x,y){
        var options={
            friction:0.01,
            restitution:0.1
        }
    
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world,this.rain);
    }

    display(){
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }

    updateY(){
        if(this.rain.position.y>800){
            Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,600)});
        }
    }








}