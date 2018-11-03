//Oscillations of angler fish in the dark 
//Going around (Oscillations)
//Similar to following a water current underwater 

//Setting to radians
angleMode = "radians";

//Particle function
var Part = function() {
    this.color = color(255, 255, 255, 170);
    this.s =floor(random(2,10));
    this.pos = new PVector(random(0,400),random(0, 400));
    this.vel = new PVector(random(6,-2),random(2,-2)); 
    this.acc = new PVector(3 ,0.0005);
    this.angle = 0;
    this.aVelocity = 0;
    this.aAcceleration = this.s*0.002;
};

//rotating and drawing particles
Part.prototype.display = function() {
    noStroke();
    fill(255, 247, 255);
    pushMatrix();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    ellipseMode(CENTER);
    ellipse(this.pos.x+10, this.pos.y+10, this.s+3, this.s+3);
    popMatrix();
};

//Particle mover
Part.prototype.move = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.s/5);
    this.pos.add(this.vel);
};

//Particle function to check edges
Part.prototype.checkEdges = function() {
     if (this.pos.x < 0) {
        this.pos.x= 5;
    }else if (this.pos.x > 400) {
        this.pos.x= 5;
    }
    else if (this.pos.y > 400) {
        this.pos.y= 5;
    }
    else if (this.pos.y < 0) {
        this.pos.y= 10;
    }

};

//calling all the functions for the particles
Part.prototype.go = function() {
    this.move();
    this.display();
    this.checkEdges();
    
    this.angle += this.aVelocity;
    this.aVelocity += this.aAcceleration;
    if (this.aVelocity > 0.05){
        this.aVelocity = 0;
    }
};

//Creating object with particle
var particle = [];
for (var i = 0; i < 200; i++){
    particle[i] = new Part();
}

//Draw function to output particles
var draw = function() {
    background(0, 0, 0);
    for (var i =0; i < particle.length; i++) {
        particle[i].go();
    }
};
