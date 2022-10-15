//Nombre à rentrer peu importe l'ordre :
var lowEnd = 1500
var highEnd = 45

var list = [];
if (lowEnd < highEnd) {
    for (var i = lowEnd; i <= highEnd; i++) {
        if ( i % 2 == 0 ){
    list.push(i);
}
}
} else if (lowEnd > highEnd) {
    for (var i = highEnd; i <= lowEnd; i++) {
        if ( i % 2 == 0 ){
    list.push(i);
}
}

}

console.log(list)