// class Circle {
//   constructor(cx, cy, radius, color) {
//     this.x = cx;
//     this.y = cy;
//     this.radius = radius;
//     this.color = color;
//     this.speed = 2 + Math.random() * 2;
//   }
//   update() {
//     this.y = this.y + this.speed;
//     this.speed = this.speed + 0.1;
//     fill(this.color);
//     circle(this.x, this.y, this.radius);
//   }
// }
// var myCircles = [];
// myCircles[0] = new Circle(100, 10, 100, [191, 185, 244]);
// myCircles[1] = new Circle(300, 10, 100, [172, 216, 209]);

// function setup() {
//   createCanvas(400, 300);
// }

// function draw() {
//   background(20, 13, 79);
//   myCircles[0].update();
//   myCircles[1].update();
// }
//
// background color rgb(73,108,120)
// floor color rgb(33,96,0)

function ground() {
  fill(33, 96, 0);
  rect(0, 500, 800, 500);
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(73, 108, 120);
  ground();
}
