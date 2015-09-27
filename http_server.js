var http = require('http');
// req – zawiera dane dotyczące zapytania
// res – zawiera właściwości i funkcje, dzięki którym jesteśmy w stanie odpowiedzieć na zapytanie
var visits = 0;
http.createServer(function( req, res ){
    if( req.url == '/' ) { 
        visits++;
        res.end('Jesteś gościem numer: '+visits+'\n');
    }
}).listen(8080);