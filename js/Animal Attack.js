//Declaring variables
var bodyX = 180;
var bodyY = 200;
var bodyW = 206;
var bodyH = bodyW/2;
var spothwidth=bodyW/9;
var spotlength=bodyH/5;

draw = function() {
    background(207, 254, 255);//Setting canvas colour
    fill(240, 209, 36);//Colouring yellow
    ellipse(bodyX, bodyY, bodyW, 106); // body
    ellipse(bodyX, bodyY-70, bodyH, 50); // face
    fill(0, 0, 0);//Filling in Black
    ellipse(bodyX+13,bodyY-75,bodyW/16,bodyW/16);//Right Eye
    ellipse(bodyX-12,bodyY-75,bodyW/16,bodyW/16);//Left Eye
    rect(bodyX+23,bodyY+10,spothwidth,spotlength);//Bottom Right 
    rect(bodyX-37,bodyY+10,spothwidth,spotlength);//Bottom Left
    rect(bodyX+23,bodyY-35,spothwidth,spotlength);//Right Top
    rect(bodyX-37,bodyY-35,spothwidth,spotlength);//Left top
    bodyX++;
    bodyW++;
};
