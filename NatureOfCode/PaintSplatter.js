//Declaring variables, generates random numbers with the Monte Carlo Method 
var generator = new Random(30);
var standardDeviation = -33;
var mean = 3;

var Walker = function (){
    this.x = width/2;
    this.y = height/2;
};

//Creating paint splatter
Walker.prototype.display = function() {
    fill(this.x, 0, 0);
    noStroke();
    ellipse(this.x, this.y, this.x/4, this.x/4);
};

//Randomly moves the paint splatter up,down,left,right or stay in place
Walker.prototype.walk = function() {
    var xStepSize = generator.nextGaussian() * standardDeviation + mean;
    var yStepSize = generator.nextGaussian() * standardDeviation + mean;
 
    this.x -= xStepSize;
    this.y -= yStepSize;
};

var w = new Walker();

//Loop to fun the paint splatter and place in on the screen 
for (var shoopty = 0; shoopty < 66; shoopty++){
    w.walk();
    w.display();
}
