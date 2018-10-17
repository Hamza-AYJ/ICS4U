//Sets background colour
background(219, 255, 255);

//Colouring roof
fill(174, 180, 214);
//Creating triangle
triangle(200, 28, 350, 150, 50, 150);

//Setting colour
fill(163, 90, 57);
//Creating rectangle
rect(60, 150, 280, 207);

//For loop
for (var y=236;y>142;y-=35)
{
    for (var x=287;x>62;x-=35)
    {
        //Setting colour
        fill(255, 170, 66);
        noStroke();
        //Creating rectangle
        rect (x,y,38,121);
    }
}
//Filling colour
fill(120, 80, 19);
//Creating rectangle
rect(180, 280, 40, 77);

//Created windows
for (var i=115;i<280;i+=70)
{
    noStroke();
    //Colouring
    fill(228, 240, 245);
    //Creating rectangle
    rect(i,205,40,40);
}
//Added Grass
for (var p = 0; p < 400; p+= 60)
{
   var grass = getImage("cute/GrassBlock"); // Grass Block
   image(grass, p, 334, 61, 75);
}

