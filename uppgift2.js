/* Skriv ett program där du får en förfrågan om ett lösenord. 
Lösenordet ska vara satt till en variabel i din kod och ENDAST om användaren skriver rätt lösenord 
ska texten "Välkommen" visas. Om användaren skriver fel lösenord ska texten "Inkräktare" visas. 
Användarens svar ska sparas som en variabel. 
Använd if och en else för att lösa problemet. 
Om det är rätt, gör det här, annars gör det här

Gör en flowchart och sedan skriva pseudokod innan ni börjar koda.



PSEUDOKOD

Input lösenord
Om rätt
---meddela "Välkommen"
annars
---meddela "Inkräktare"

*/

const password = "qwerty123";
const userInputPassword = prompt("To get clearence, please type the password:");

console.log("Password: " + userInputPassword);

if (userInputPassword == password) {
    console.log("Välkommen");
}
else {
    console.log("Inkräktare");
}