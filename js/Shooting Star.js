//Declaring variables
//First shooting star base coordinates
var xPos = 37;
var yPos = 354;
//Second shooting stars coordinates
var ypos=200,xpos=50;
var x=5;
//Third shooting star
var thirdX=20,thirdY=200;


//Drawing shooting star (animation)
draw = function() {
    //Colouring background of canvas
    background(29, 40, 115);
    //Colouring the shooting star
    fill(255, 242, 0);
    //Drawing a circle at coordinates and indicating the size
    ellipse(xPos, yPos, 20, 20);
    ellipse(xpos,ypos,10,10);
    ellipse(thirdX,thirdY,25,25);
    //First shooting star animation
    yPos--;
    xPos+=4;
    //Second shooting star animation
    xpos+=x;
    ypos-=3;
    //Third shooting star animation
    thirdX+=3;
    thirdY+=2;
};



