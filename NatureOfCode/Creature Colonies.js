//This is a ecosystem of the dark in the Mariana Trench
//Many organisms rely on light in order to see
//Lights flicker so many organisms can maneuver and find shelter or prey
//Some may endure a predator and die
//Best represents an anglerfishes light to attract many organisms towards it
//Organisms that come to it die (lifespan)

//Angle setting to radians
angleMode = "radians";

//Creating fish
var Fish = function(){
    this.c = color(255, 255, 255, 170);
    this.s=floor(random(2,10));//size
    this.pos = new PVector(random(0,400),random(0, 400));
    this.vel = new PVector(random(4,-4),random(2,-2)); 
    this.acc = new PVector(random(-3, 3) ,random (-3, 3));
    this.timealive = 280;
    this.LifeCounter = 0;
};

//Updating fishes life counter
Fish.prototype.update = function(){
    this.timealive -= 4;
    this.s += this.LifeCounter/75;
    
    if (this.LifeCounter < 10){
        this.LifeCounter++;
    }
    
    if (this.LifeCounter >= 10){
        this.LifeCounter = 0;
    }
    
    if (this.timealive < 100){
        this.c = color(250, 250, 250, 100);
    }
};

//Displaying the fish on screen
Fish.prototype.display = function() {
    noStroke();
    fill(this.c);
    ellipseMode(CENTER);
    ellipse(this.pos.x, this.pos.y, this.s, this.s);

};

//Moving the fish
Fish.prototype.move = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.s/5);
    this.pos.add(this.vel);
    
};

//Checking if the fish's lifespan is over
Fish.prototype.isDead = function() {
    if (this.timealive < 0) {
        return true;
    } else {
        return false;
    }
};

//Checking edges for fish
Fish.prototype.checkEdges = function() {
     if (this.pos.x < 0) {
        this.acc = new PVector(3 , this.acc.y);
    }else if (this.pos.x > 400) {
        this.acc = new PVector(-3 ,this.acc.y);
    }
    else if (this.pos.y > 400) {
        this.acc = new PVector(this.acc.x , -3);
    }
    else if (this.pos.y < 0) {
        this.acc = new PVector(this.acc.x , 3);
    }
    
};

//Calling all functions ofr fish
Fish.prototype.go = function() {
    this.move();
    this.update();
    this.display();
    this.checkEdges();
    
    this.aVelocity += this.aAcceleration;
    if (this.aVelocity > 0.03){
        this.aVelocity = 0;
    }
};

//Particlesystem function for array of fish
var ParticleSystem = function(position) {
    this.fishes = [];
};

//Particlesystem function for particles
ParticleSystem.prototype.addParticle = function() {
    this.fishes.push(new Fish());
};

//Particlesystem function
ParticleSystem.prototype.run = function() {
    for (var i = this.fishes.length-1; i >= 0; i--) {
        var p = this.fishes[i];
        p.go();
        if (p.isDead()) {
            this.fishes.splice(i, 1);
        }
    }
};

//Setting anglerfish to particle system
var anglerfish = new ParticleSystem();

//Draw function
var draw = function() {
    background(0, 0, 0);
    anglerfish.run();
    if (frameCount % 10 === 0){
        anglerfish.addParticle();
    }
};
