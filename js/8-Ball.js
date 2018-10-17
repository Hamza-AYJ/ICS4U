fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1, 6));
if (answer ===1) {
    text("NOT YET", 176, 200);
    text("IMPLEMENTED", 159, 229); 
}
else if (answer===2){
    text("Hello", 185, 200);
    text("World", 182, 227); 
}
else if (answer===3){
    text("You are going", 165, 200);
    text("to win today", 169, 227);
}
else if (answer===4){
    text("Bonjour", 186, 200);
}
else {
    text("Spicy", 186, 200);
}
