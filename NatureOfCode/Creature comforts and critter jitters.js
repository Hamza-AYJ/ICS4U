//Fish roams around the screen and the bear follows it with force of attraction  

//Setting constant
var G = 1;

//Move function (declaring mass, position, velocity and accerelation) 
var Mover = function(m, x, y) {
    this.mass = m;
    this.position = new PVector(x, y);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};

//Mover function that applys acceleration
Mover.prototype.applyForce = function(force) {
    var f = PVector.div(force, this.mass);
    this.acceleration.add(f);
};
  
//Mover function to update position/accerlation
Mover.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};

//Function to display bear on screen
Mover.prototype.displayBear = function() {
    noStroke();
    fill(225, 235, 221);
    ellipse(this.position.x, this.position.y, this.mass*20, this.mass*23);
    ellipse(this.position.x - 26, this.position.y-21, 20, 20);
    ellipse(this.position.x + 26, this.position.y-21, 20, 20);
    fill(5, 5, 5);
    ellipse(this.position.x + 13, this.position.y-16, 18, 18);
    ellipse(this.position.x - 13, this.position.y-16, 18, 18);
    fill(26, 26, 26);
    ellipse(this.position.x+27, this.position.y-22 , 13, 13);
    ellipse(this.position.x+-27, this.position.y-22 , 13, 13);
    ellipse(this.position.x+-27, this.position.y-22 , 13, 13);
    ellipse(this.position.x, this.position.y , 10, 7);
    arc(this.position.x, this.position.y+10, 33, 32, 0, 180);
    fill(250, 10, 10);
    arc(this.position.x, this.position.y+16, 16, 23, 0, 180);
    fill(74, 152, 158);
    ellipse(this.position.x-13, this.position.y-16, 8, 8);
    ellipse(this.position.x+14, this.position.y-15, 8, 8);
};

//Function todisplauy fish
Mover.prototype.displayFish = function() {
    stroke(0);
  strokeWeight(2);
  fill(222, 93, 166);
  triangle(this.position.x, this.position.y, this.position.x - 20, this.position.y - 10 , this.position.x - 20, this.position.y + 10);
  ellipse (this.position.x, this. position.y, 20,20);
  fill(0, 0, 0);
  ellipse (this.position.x+4, this. position.y-1, 9,9);
  fill(127);
};

//Function to calculate attraction force (fish)
Mover.prototype.calculateAttractionFish = function(m) {
    var force = PVector.sub(this.position, m.position);
    var distance = force.mag();
    distance = constrain(distance, 5.0, 25.0);
    force.normalize();
    var strength = (G * this.mass * m.mass) / (distance * distance);
    force.mult(strength);
    return force;
};

//Calulate force of attraction with the bear
Mover.prototype.calculateAttractionBear = function(m) {
    var force = PVector.sub(this.position, m.position);
    var distance = force.mag();
    distance = constrain(distance, 5.0, 25.0);
    force.normalize();
    var strength = (G * this.mass * m.mass) / (-distance * distance);
    force.mult(strength);
    return force;
};

//checking the position if past the canvas
Mover.prototype.CheckEdges = function() {

  if (this.position.x > width) {
    this.position.x = width;
    this.acceleration.set(-0.5, 0);

  } 
  else if (this.position.x < 0) {
    this.position.x = 0;
    this.acceleration.set(0.5, 0);
  }

  if (this.position.y > height) {
    this.position.y = height;
    this.acceleration.set(0, -0.5);
    
  } 
  else if (this.position.y < 0) {
    this.position.y = 0;
    this.acceleration.set(0, 0.5);
  }
};

//Generating random number and passed to function
var fish = new Mover(5, random(width)+10, random(height)+10);
var bear = new Mover(3, random(width)+10, random(height)+10);

//Infinite loop
draw = function() {
    background(127, 214, 240);
    var force = fish.calculateAttractionFish(bear);
    fish.applyForce(force);
    fish.CheckEdges();
    fish.update();
    fish.displayFish();
    force = bear.calculateAttractionBear(fish);
    bear.applyForce(force);
    bear.CheckEdges();
    bear.update();
    bear.displayBear();
};
