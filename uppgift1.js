/* 

Skapa ett program som frågar efter namn och ålder samt sparar ner dessa i separata variabler.
Börja med att göra en flowchart och sedan skriva pseudokod, detta för att arbeta in förberedelsemetoder inför programmeringsproblem.

Beroende på vilken åldern användaren skriver in ska olika popups komma upp. Dessa ska ni styra med if/else statements.

följande regler ska gälla:

* programmet ska svara med namnet innan den skriver ut reglerna

* om personen är under 15, visa texten "Du måste ha hjälm när du cyklar"

* om personen är under 18, visa texten "Du får inte rösta"

* om personen är under 23, visa texten "Det blir ingen finlandsfärga"

* om personen är över 23, visa texten "Du är gammal nog att göra vad du vill"

Programmet ska bete sig enligt följande när du är klar:

Hej, vad heter du? :Micke
Ok Micke, hur gammal är du? :17

Du får inte rösta, Micke!
Det blir ingen finlandsfärga, Micke!


PSEUDOKOD

input name
input age
if under 15
    "Du måste ha hjälm när du cyklar"
else if under 18
    "Du får inte rösta"
else if under 23
    "Det blir ingen finlandsfärga"
else
    "Du är gammal nog att göra vad du vill"



*/

const name = prompt("Hej, Vad heter du?");
console.log(name);

const age = prompt(`Okej ${name}, hur gammal är du?`);
console.log(age);

if (age < 15) {
    console.log(`Du måste ha hjälm när du cyklar, ${name}!`)
}
if (age < 18) {
    console.log(`Du får inte rösta, ${name}!`)
}
if (age < 23) {
    console.log(`Det blir ingen finlandsfärga, ${name}!`)
}
if (age >= 23) {
    console.log(`Du är gammal nog att göra vad du vill, ${name}!`)
}