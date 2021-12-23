/*
Med den kunskap ni fått från föregående 9 uppgifter, skapa spelet sten/sax/påse som kan spelas mot datorn. 
Spela det verkliga spelet med en vän för att se hur processen går till. 
Översätt sedan detta till pseudokod eller en flowchart innan ni börjar programmera. 
Kom ihåg att bryta ner problemet i flera moduler och få dessa att funka separat.

Parprogrammering uppmuntras. Använd er av tekniker från tidigare uppgifter för att lösa denna uppgift.
*/



/*  */

let computerChoice = Math.random();
computerChoice = computerChoice * 2;
computerChoice = Math.round(computerChoice);
console.log(computerChoice);

if(computerChoice == 0) {
    computerChoice = "Sten";
} else if (computerChoice == 1) {
    computerChoice = "Sax";
} else if (computerChoice == 2) {
    computerChoice = "Påse";
}

let userChoice = prompt("Stex, Sax eller Påse");
console.log(userChoice);

if (computerChoice == userChoice) {
    alert("Lika");
} else if (computerChoice == "Sten" && userChoice == "Påse") {
    alert("Du vann");
} else if (computerChoice == "Sax" && userChoice == "Sten") {
    alert("Du vann");
} else if (computerChoice == "Påse" && userChoice == "Sax") {
    alert("Du vann");
} else {
    alert("Du förlorade");
}
