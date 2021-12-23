/*
Ni ska programmera ett spel som går ut på att användaren ska gissa ett slumpvalt nummer 
mellan 0 och 10 som programmet har slumpat fram i förväg. 
Om spelaren gissar fel så ska den få ett försök till (totalt 2 gissningar) 
tillsammans med en text som berättar om gissningen var för hög eller för låg. 
Om spelaren gissar rätt ska spelet meddela spelaren att den har vunnit. 

Gör leken i verkligheten tillsammans med en bordskamrat och tänk efter hur ni gör denna process, detta kommer att underlätta tänkandet.

När ni har fått en känsla för hur detta utspelar sig mellan två människor ska ni översätta det för datorn. 
Börja med att göra en flowchart som beskriver processen. 
Gå sedan vidare och skriv pseudokod. 
Nedan finner ni en startkod för hur man gör ett slumpvalt nummer.
*/ 


/**
 * PSEUDOKOD
 * 
 * Slumpa ett nummer
 * while 2 varv
 * --------------------
 * användaren gissar
 * om rätt
 * ----rätt
 * om fel
 * ----om för högt
 * -------för högt
 * ----annars
 * -------för lågt
 * -------------------
 * tack för att du spelade
 */


function firstCheck(userNumber, number) {
    console.log("Entered firstCheck");
    if (userNumber == number) {
        console.log("Right on firstCheck");
        alert("CONGRATULATIONS! You got the awenser correct, the number was: " + number);
    }
    else if (userNumber < number) {
        tempNumber = userNumber + 1;
        console.log("Too low on firstCheck");
        newNumber = prompt("You guesed: " + userNumber + ". But the awnser is a higher number. Make a new guese between " + tempNumber + "-10");
        return(newNumber);
    }
    else {
        tempNumber = userNumber - 1;
        console.log("Too high on firstCheck");
        newNumber = prompt("You guesed: " + userNumber + ". But the awnser is a lower number. Make a new guese between 0-" + tempNumber);
        return(newNumber);
    }
}


function secoundCheck(newNumber, number) {
    console.log("Entered secoundCheck");
    if (newNumber == number) {
        console.log("Right on secoundCheck");
        alert("CONGRATULATIONS! You got the awenser correct, the number was: " + number);
    }
    else {
        console.log("Wrong on secoundCheck");
        alert("YOU LOSE! You did not guese the correct number. The correct number was: " + number);
    }
}


function dataCheck(data) {
    while (data != 0 && data != 1&& data != 2&& data != 3&& data != 4&& data != 5&& data != 6&& data != 7&& data != 8&& data != 9&& data != 10) {
        data = prompt("INVALID DATA! The guese needs to be betwene 0-10. Make a new guese");
    }
    data = parseInt(data);
    return(data);
}


/**
 * START
 */
console.log("Program Start");

//Tar ett slumpvalt värde mellan 0 och 10
let number = Math.random();
number = number * 10;
number = Math.round(number);
/* FORTSÄTT MED EGEN KOD HÄR */

let userNumber = prompt("Make a guese what number it is. 0-10");
let newNumber = 1;
let tempNumber = 1;

userNumber = dataCheck(userNumber);

newNumber = firstCheck(userNumber, number);

if (userNumber != number) {
    secoundCheck(newNumber, number);
}

console.log("Program Done");
alert("Thank you for playing");