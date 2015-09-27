// W tym przykładzie oba wywołania funkcji blokują wątek.
var fs = require('fs');

var data = fs.readFileSync("bardzo_duzy_plik.json", 'utf8');
var object = JSON.parse( data );
