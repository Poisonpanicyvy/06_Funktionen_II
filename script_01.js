
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart :
3. Fkt. Grundrechenarten :
4. Ausgabe in Konsole : check!
*/
// module: addition a + b |  test:
output(add(2,2));
output(add(2,-3));
output(add(2,0));
output(add(2,8));

output(subtract(3,2));
output(subtract(3,-2));
output(subtract(3,0));
output(subtract(2,8));
function subtract(a,b){
	return a - b;
}





// module:  output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  