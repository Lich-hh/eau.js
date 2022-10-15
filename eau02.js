//Entrer la phrase :

var phrase = [ " Je m'appel", " UN ", " DEUX", " trois"];

if (phrase.length == 3) {
	console.log (phrase[2], phrase[1], phrase[0]);
}	else if (phrase.length == 4 ) {
	console.log (phrase[3], phrase[2], phrase[1], phrase[0]);
} 	else if (phrase.length == 2 ) {
	console.log (phrase[1], phrase[0]);

}	else if (phrase.length == 1) {
	console.log (phrase[0]);
}
