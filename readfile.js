var fs = require('fs');
var name = 'test.txt';
fs.readFile( name, 'utf8', function( err, text ){
    console.log( text );
});
console.log('Zawartość pliku:');