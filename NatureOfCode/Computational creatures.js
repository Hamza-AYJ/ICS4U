//Declaring variables
var Xposition;
var Yposition;

//Declaring creature function
var creature = function () {
    this.position = new PVector(width/2,height/2);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};
//Declaring ground function
var ground = function(){
    //For loop to display images
    for (var i=0; i<400;i+=40){
        //Getting the grass block image
        image(getImage("cute/GrassBlock"),i,360,40,40);
        //Getting the tall tree image
        image(getImage("cute/TreeTall"),i+-10,320,60,60);
    }
    
};
//Creature constructor 
creature.prototype.update = function() {
    //Declaring mouse
    var mouse = new PVector(mouseX,mouseY);
    var direction = PVector.sub(mouse, this.position);
    //Normalizing mouse
    direction.normalize();
    //Multiplying vector
    direction.mult(0.5);
    //Setting acceleration to direction
    this.acceleration = direction;
    //Adding acceleration to velocity
    this.velocity.add(this.acceleration);
    //Setting velocity limit
    this.velocity.limit(2);
    //Position is being added by velocity
    this.position.add(this.velocity);
    
};
//Creature constructor (display)
creature.prototype.display = function(){
    //Getting animal image
    image(getImage("avatars/orange-juice-squid"),this.position.x,this.position.y,68,68);
};

//Creature constructor (
creature.prototype.checkEdges = function() {
    //Checks if position is greater than x
    if (this.position.x > width) {
    this.position.x = 0;
    } 
    //checks if position is less than 0
    else if (this.position.x < 0) {
    this.position.x = width;
    }
    //Checks if positions height is greater than 0
    if (this.position.y > height) {
    this.position.y = 0;
  } 
  //Checks if positions height is less than 0
  else if (this.position.y < 0) {
    this.position.y = height;
  }
};
//Setting variable to object
var animal = new creature();

//Draw function
draw = function() {
    //Setting background colour
    background(93, 179, 245);
    //No stroke
    noStroke();
    //Colouring sun
    fill(255, 255, 0);
    //Drawing circle
    ellipse(40,40,45,45);
    //Calling ground function
    ground();
    //Calling to update constructor
    animal.update();
    //Calling to checkEdges constructor
    animal.checkEdges();
    //Calling to display constructor
    animal.display();
};

