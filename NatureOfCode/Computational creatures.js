background(93, 179, 245);
var position;

var creature = function () {
    this.position = new PVector(width/2,height/2);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};

var ground = function(){
    for (var i=0; i<400;i+=40){
        image(getImage("cute/GrassBlock"),i,360,40,40);
    }
};

creature.prototype.display = function() {
    image(getImage("avatars/primosaur-tree"),106,318,68,68    );
};


var animal = new creature();

draw = function() {
    noStroke();
    fill(255, 255, 0);
    ellipse(40,40,45,45); 
    ground();
    animal.display();
};

