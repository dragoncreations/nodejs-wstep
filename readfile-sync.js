var fs = require('fs');
var name = 'test.txt';
var text = fs.readFileSync( name, 'utf8');
console.log('Zawartość pliku:');
console.log( text );