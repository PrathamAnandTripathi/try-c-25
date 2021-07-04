class Ball{
    constructor() {
        var options = {
            isStatic:false ,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        
        ball = Bodies.circle(200,100,20,70,options);
        World.add(world,ball);
      
        ball.addImage(ball_img);
        ball.radius=70;

    }

display(){
    var pos =this.body.position;
    push ();
    translate (pos.x,pos.y);
    fill(255);
    circle(0,0, this.width, this.radius);
    pop();
  }
};
