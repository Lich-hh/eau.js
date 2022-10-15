function phrase(str) {
    var mot  = str.toLowerCase().split(' ');

    var array = [];

    mot.forEach(word => {
      var premier_lettre = word.charAt(0).toUpperCase();

      var remplacer = word.replace(word.charAt(0), premier_lettre);

      array.push(remplacer);
    })
    if (typeof phrase == Number ){
      console.log (" Erreur ")
   } else {
    console.log(array.join(' '));
  }
}

 
  phrase("salam, salut, hello, hola");