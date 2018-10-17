var xPositions = [200,80,150,20,280,150,350,250,350,38,60,291,];
var yPositions = [10,30,180,129,360,170,280,309,10,99,300,200,];

draw = function() {
    background(204, 247, 255);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(0, 200, 255);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
        
        if (yPositions[i]>400){
            yPositions[i] = 2;
        }
    }
    if (mouseIsPressed)
    {
        xPositions.push(mouseX);
        yPositions.push(mouseY);
    }
};
