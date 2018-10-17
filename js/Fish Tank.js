background(89, 216, 255);
//Declaring variables
var centerX = 200;
var centerY = 100;
var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(162, 0, 255);
var bubbleX=263; 
var bubbleY=20;
var bubbleH=12;
var bubbleW=13;
//Declaring function
var Bubbles = function(bubbleX,bubbleY,bubbleH,bubbleW){
    fill(9, 86, 240);
    ellipse(bubbleX,bubbleY,bubbleH,bubbleW);
};
var Fish = function(centerX, centerY, bodyLength, bodyHeight, bodyColor)
{
    noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};
//Calling to function
Fish(centerX, centerY, bodyLength, bodyHeight, bodyColor);
Fish(centerX-116, centerY+263, -bodyLength+12, bodyHeight-39, bodyColor+44);
Fish(centerX+64, centerY+109, -bodyLength/4, bodyHeight/4, bodyColor/10);
Fish(centerX+-151, centerY+58, -bodyLength/4, bodyHeight/4, bodyColor/3);
Fish(centerX+94, centerY+226, -bodyLength+10, bodyHeight+10, bodyColor+10);
Bubbles(bubbleX+10,bubbleY-1,bubbleH+6,bubbleW+4);        
Bubbles(bubbleX+63,bubbleY+235,bubbleH+30,bubbleW+30);   
Bubbles(bubbleX-240,bubbleY+100,bubbleH+6,bubbleW+6);   
Bubbles(bubbleX+-147,bubbleY+300,bubbleH+8,bubbleW+8);   
