/*
Skapa ett program som låter användaren välja en form genom att skriva in circle/rectangle/triangle. 
Programmet ska baserat på användarens val be om input för att beräkna den valda formens area. 
När användaren fått svara med den data som behövs ska en uträkning på arean skapas och programmet skriver ut resultatet 

Gör en flowchart och sedan skriva pseudokod innan ni börjar koda.


PSEUDOKOD

Välj mellan circle/rectangle/triangle
if circle 
-----be om värden för att räkna ut circle area
else if rectangle
-----be om sidlängder och räkna ut area
else if triangle
-----be om värden för att räkna ut triangle
else
-----felaktigt svar input new awnser
räkna ut korrekt area och output


*/

alert("You will now pick a shape to calculate the area of");
let userInput = prompt('Pick one: "circle", "square" or "triangle"');
let newChoice = "";
let radius = "";
let area = "";
let side1 = "";
let side2 = "";
let base = "";
let height = "";
userChoices(userInput);


/**
 * Calculat the area of a circle
 */
function circle() {
    radius = prompt("What is the radius of the circle?");
    console.log("Radius = " + radius);
    if (radius > 0) {
        area = radius ** 2 * 3.14159265359;
        console.log("The area of the circle is: " + area);
        alert("The area of the circle is: " + area);
    }
    else {
        alert("Wrong data");
        circle();
    }
}


/**
 * Calculat the area of a square
 */
function square() {
    side1 = prompt("What is the lenght of the first side?")
    console.log("First side = " + side1);
    if (side1 > 0) {
        side2 = prompt("What is the lenght of the secound side?")
        console.log("Secound side = " + side2);
        if (side2 > 0) {
            area = side1 * side2;
            console.log("The area of the square is: " + area);
            alert("The area of the square is: " + area);
        }
        else {
            alert("Wrong data");
            square();
        }
    }
    else {
        alert("Wrong data");
        square();
    }
}


/**
 * Calculat the area of a triangle
 */
function triangle() {
    base = prompt("What is the base of the triangle?")
    console.log("Base = " + base);
    if (base > 0) {
        height = prompt("What is the height of the triangle?")
        console.log("Height = " + height);
        if (height > 0) {
            area = base * height / 2;
            console.log("The area of the triangle is: " + area);
            alert("The area of the triangle is: " + area);
        }
        else {
            alert("Wrong data");
            triangle();
        }
    }
    else {
        alert("Wrong data");
        triangle();
    }
}


/**
 * Pick the shape
 */
function userChoices(shape) {
    if (shape == "circle") {
        console.log("userInput = " + shape);
        circle();
    }
    else if (shape == "square") {
        console.log("userInput = " + shape);
        square();
    }
    else if (shape == "triangle") {
        console.log("userInput = " + shape);
        triangle();
    }
    else {
        console.log("Invalid userInput = " + shape);
        newShape = prompt('INVALID AWNSER!!!!! Pick one of these three. "circle", "square" eller "triangle"')
        userChoices(newShape);
    }
}