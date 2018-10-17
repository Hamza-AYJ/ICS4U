//Object for books
var book = [
    {title: "The 100",stars: 3, author:"Kass Morgan",rgb:color(245, 22, 22)},
    {title: "The Mazer Runner",stars: 4, author:"James Dashner",rgb:color(235, 80, 235)},
    {title: "Harry potter",stars: 3, author:"J.K Rowling",rgb:color(82, 235, 100)},
    {title: "Hamlet",stars: 2, author:"Shakespear",rgb:color(235, 130, 82)},
    {title: "War and Peace",stars: 4, author:"Leo Tolstoy",rgb:color(235, 130, 82)},
    {title: "Beloved",stars: 4, author:"Toni Morrison",rgb:color(235, 130, 82)},
    {title: "The Great Gatsby",stars: 3, author:"Scott Fitzgerald",rgb:color(235, 130, 82)},
    {title: "Iliad",stars: 3, author:"Homer",rgb:color(235, 130, 82)},
];

// draw shelf
fill(173, 117, 33);
rect(0, 120, width, 10);

//For loop
for(var x=0; x<book.length;x++){
    //Bottom shelf
    rect(0, 292, width, 10);
    //Setting book colour to a random colour
    var colorbook = book[x].rgb;
    //Setting the cover to the cover
    fill(colorbook);
    //Drawing the book 
    rect(10 + x * 100, 20, 90, 100);
    rect(10 + x * 100, 192, 90, 100);
    fill(0, 0, 0);
    //Adding title of book
    text(book[x].title, 24 + x * 98, 29, 70, 100);
    //Adding author of book
    text(book[x].author, 34 + x * 96, 60, 70, 100);
    //For loop to setup front page
    for (var bottom=4; bottom < book.length; bottom++){
        //Add title to bottom books
        text(book[bottom].title, -356 + bottom * 96 , 203, 70, 100);
        //Add author to bottom books
        text(book[bottom].author, -356 + bottom * 96 , 236, 70, 100);
        //For loop to add stars
    for (var p = 0; p < book[bottom].stars; p++){
        //Adding stars
        image(getImage("cute/Star"), -290 + p * -18 + bottom * 91, 273, 12, 17);
    }
}
    //For loop to add stars    
    for (var i = 0; i < book[x].stars; i++) {
        //Adding stars
        image(getImage("cute/Star"), 13 + i * 20 + x * 100, 90, 20, 30);
    }
}

