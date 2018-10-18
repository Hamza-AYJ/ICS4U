noStroke();
fill(228, 230, 227);
rect(0,0,400,400);

//Setting mountain function
var drawRange = function() {
    
    var incAmount = 0.01;
    
    for (var p = 0; p < incAmount*width; p += incAmount) {
        //Setting variable to noise
        var n = noise(p);
        //Mapping mountain on screen
        var y = map(n, 0, 1, 263, height/43);
        //Setting colour
        fill(114, 108, 130);
        noStroke();
        rect(p*100, height-y, 1, y);
    }
};

//Setting goround function
var drawRange2 = function() {
    var incAmount = 0.010;
    //For loop to add terrain
    for (var g = 0; g < incAmount*width; g += incAmount) {
        //Setting variable to noise 
        var n = noise(g);
        //Mapping terrain
        var y = map(n, 0, 4, 1, height/1.5);
        //Setting colour
        fill(31, 145, 46);
        noStroke();
        rect(g*100, height-y, 1, y);
    }
    //Setting colour
    fill(247, 255, 0);
    //Adding circle (sun)
    ellipse(63,68,75,75);
};

//Setting bird function
var bird = function() {
    //Setting font style
    var l = createFont("monospace");
    textFont(l);
    //Setting colour
    fill(13, 11, 11);
    textSize(40);
    //For loop to add birds
    for (var birdy = 0; birdy < 5; birdy++){
        //Setting position of birds
        text("m", random(9, 322), random(43,216)); 
    }
};

//Calling functions
drawRange();
drawRange2();
bird();
