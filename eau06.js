

var alternateCase = function (s) {

  var mot = s.toLowerCase().split("");

  for (var i = 0; i < mot.length; i += 2) {

    mot[i] = mot[i].toUpperCase();

  }



  return mot.join("");

};

var txt = "Quitter la galère";

console.log(alternateCase(txt));