

var phrase = 'Bien ou Bien';
var mot = 'Bien'

var tab_phrase = phrase.split(' ');


if (tab_phrase.includes(mot)) {
    console.log(tab_phrase.indexOf(mot));
} else {
    console.log('-1')
}


