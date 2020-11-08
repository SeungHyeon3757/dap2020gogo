let numBalls = 13;
let spring = 0.03;
let gravity = 0.1;
let friction = -0.9;
let balls = [];
let people=0;

function setup() {
  createCanvas(720, 400);

  for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(
      random(width),
      random(height),
      random(30, 70),
      i,
      balls
    );
  }
  noStroke();
  fill(255, 204);
}

function draw() {
  background(0);
  balls.forEach(ball => {
    ball.collide();
    ball.move();
    ball.display();
  });
   if (mouseIsPressed) {
     people=255;
  } else {
    people=200;
  }
  fill(people);
    noStroke();
    rectMode(CENTER);
    rect(mouseX, mouseY+45, 55, 60, 30, 30, 0, 0);
    circle(mouseX,mouseY-5,35);
}

class Ball {
  constructor(xin, yin, din, idin, oin) {
    this.x = xin;
    this.y = yin;
    this.vx = mouseX;
    this.vy = mouseY;
    this.diameter = din;
    this.id = idin;
    this.others = oin;
  }

  collide() {
    for (let i = this.id + 1; i < numBalls; i++) {
      // console.log(others[i]);
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      //   console.log(distance);
      //console.log(minDist);
      if (distance < minDist) {
        //console.log("2");
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
        let ax = (targetX - this.others[i].x) * spring;
        let ay = (targetY - this.others[i].y) * spring;
        this.vx -= ax;
        this.vy -= ay;
        this.others[i].vx += ax;
        this.others[i].vy += ay;
      }
    }
  }

  move() {
    this.vy += gravity;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2;
      this.vx *= friction;
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2;
      this.vx *= friction;
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2;
      this.vy *= friction;
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2;
      this.vy *= friction;
    }
  }

  display() {
 strokeWeight(5);
    let a = 0;
    for(let i = 0; i < 20; i++) {
    a= random(3);
    print(a);
    if(a<1){
    fill(255,220,0);
    stroke(255,255,100);
    circle(this.x,this.y,this.diameter/1.2,this.diameter/1.2);
    print("circle");
    }
    else if(a<2){
    fill(170,240,0);
    stroke(220,250,190);
    rectMode(CENTER);
    rect(this.x,this.y,this.diameter/1.5,this.diameter/1.5, 10, 10, 10, 10);
    print("rect");
    }
    else if(a<3){
    fill(0,200,240);
    stroke(200,255,255);
rect(this.x,this.y,this.diameter/2,this.diameter/2, 10, 10, 10, 10);
    print("triangle");
    }
  }
  }
  }
