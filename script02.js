// Mimo że samo odczytanie pliku jest asynchroniczne i wywołanie funkcji readFile 
// nie zablokuje wątku na dłużej, to jednak parsowanie zawartości pliku poprzez JSON.parse 
// zablokuje wątek na kilkadziesiąt milisekund.
var fs = require('fs');

fs.readFile("bardzo_duzy_plik.json", 'utf8', function(err, data){
    var object = JSON.parse( data );
});