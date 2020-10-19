let rain = [];
let floor;
let dropCount = 0;
let blue = .05;

function setup() {
  createCanvas(800, 600);
  floor = new ground();
  for(var i = 0; i <400; i++){
    rain[i]= new raindrop();
  }
  
}

function draw() {
  
  background(30, 30, 49); 
  floor.display();
  for (var i=0;i<400;i++){
    rain[i].display();
    rain[i].fall();
  }
  
}

class raindrop {
  constructor(){
    this.x = random(0, width);
    this.y = random(0, -height);
    
  }
    display() {
      noStroke();
      fill(173,213,231);
      ellipse(this.x,this.y,random(1,5),random(1,5));
    }

    fall() {
      this.speed = random(3,9);
      this.grav = 1.05;
      this.y += (this.speed*this.grav);

      if (this.y > 500) {
        this.y = random(0,-height);
        this.grav= 0;
        dropCount += 1; 
        
       
        if(dropCount == 10){
          dropCount = 0;
          blue = blue + 1;
          
        }

      }
      
    }
    
  }


class ground {
  constructor() {
    this.x=0;
    this.y=500;
    this.w=800;
    this.h=500;
  }

  
    

    display(){
      fill(0,52,blue);
      rect(this.x,this.y,this.w,this.h);
    }    

}


