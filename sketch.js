function setup() {
  createCanvas(400, 400);
  background(0);
  new balls();

}
function balls() {
    strokeWeight(5);
    let a = 0;
    let x = random(width);
    let y = random(height);
  for(let i = 0; i < 20; i++) {
    a= random(3);
    print(a);
    if(a<1){
    fill(255,220,0);
    stroke(255,255,100);
    circle(random(width),random(height),20,20);
    print("circle");
    }
    else if(a<2){
    fill(170,240,0);
    stroke(220,250,190);
    rect(random(width),random(height),20,20);
    print("rect"); 
    }
    else if(a<3){
    fill(0,200,240);
    stroke(200,255,255);
    triangle(x ,y, x+20, y, x+10, y+20);
    print("triangle");
    }
  }
}
function mouseClicked() {
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(mouseX, mouseY+45, 60, 60, 30, 30, 0, 0);
    circle(mouseX,mouseY,45,45);
}
