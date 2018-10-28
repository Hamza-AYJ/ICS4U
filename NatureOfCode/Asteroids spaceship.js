//Press or hold space to accerlerate
//Press or hold ctrl to deaccerlerate/stop
//Once the spaceship has started moving, move the ship with your arrow keys

//Setting angle to radians
angleMode = "radians";

//Mover function was used to create asteriod spaceship
var Mover = function(x, y) {
    this.position = new PVector(x, y);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
    this.topspeed = 4;
    this.xoff = 1000;
    this.yoff = 0;
    this.r = 16;
};

//Star function to set stars locations on screen
var Star = function(x, y){
    this.position = new PVector(x, y);
};

//Function to calculate accerleration and velocity for spaceship
Mover.prototype.accelerate = function(){
    this.velocity.x += 0.1;
    this.acceleration.x += 0.3;
};

//Function to update position,acceleration and velocity
Mover.prototype.update = function () {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};

//Function to turn the spaceships position left
Mover.prototype.turnLeft = function() {
    angleMode = "degree";
    pushMatrix();
    this.velocity.rotate(-0.15);
    popMatrix();
};

//Function to turn the spaceships position right
Mover.prototype.turnRight = function() {
    angleMode = "degree";
    pushMatrix();
    this.velocity.rotate(0.15);
    popMatrix();
};

//Function to stop the spaceships movement
Mover.prototype.stop = function(){
    angleMode = "degree";
    this.velocity.x -= 0.05;
    if (this.velocity.x < 0){
        this.velocity.set(0);
    }
};

//Function to display stars across screen
Star.prototype.displayStars = function(){
    noStroke();
    fill (255, 255, 255);
    ellipse(this.position.x,this.position.y,1.5,1.5);
};

//Function to display the spaceship on the screen
Mover.prototype.display = function () {
    var angle = this.velocity.heading();
    stroke(0, 0, 0);
    strokeWeight(2);
    fill(127, 127, 127);
    pushMatrix();
    translate(this.position.x, this.position.y);
    rotate(angle);
    fill(95, 102, 76);
    ellipse(-24,10,10,10);
    ellipse(-24,-5,10,7);
    triangle(-25, 20, 16, 5, -25, -15);
    fill(255, 255, 255);
    rect(-7, -4, 8, 13, 13);
    rect(-20, -6, 8, 17, 20);
    popMatrix();
};

//Function to check if the spaceship surpases the 400x400 screen
Mover.prototype.checkEdges = function () {
    if (this.position.x > width) {
        this.position.x = 0;
    } else if (this.position.x < 0) {
        this.position.x = width;
    }
    
    if (this.position.y > height) {
        this.position.y = 0;
    } else if (this.position.y < 0) {
        this.position.y = height;
    }
};


var spaceship = new Mover(width/2, height/2);
var stars = [];
for (var i = 0; i < 100; i++){
    stars[i]= new Star(random(width), random(height));
}

//Checking if any of the specific key's are pressed
keyPressed = function(){
    if (keyCode === LEFT){
        spaceship.turnLeft();
    }
    else if (keyCode === RIGHT){
        spaceship.turnRight();
    }
    else if (keyCode === 32){
        spaceship.accelerate();
    } 
    else if (keyCode === 17){
        spaceship.stop();
    }
};

//Draw function (infinite loop), will update the spaceships location 
draw = function() {
    background(0, 0, 0);
    fill(255, 255, 255);
    text("Hold Space to Accelerate", width/2-55, height-31, 190, 146);
    text("Hold Control to Stop", width/2-39, height-15, 190, 146);
    for (i = 0; i < stars.length; i++){
        stars[i].displayStars();
    }
    spaceship.update();
    spaceship.checkEdges();
    spaceship.display();
};
