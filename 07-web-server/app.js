const http = require('http');
let consola = console.log;

http.createServer( (req, res ) => {

    res.writeHead(200, {'content-Type':'application/json'});
    let salida = {
        nombre: 'Yirleison',
        edad: 30,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    //res.write('Hola Mundo');
    res.end();
})
.listen(8080);

consola('Servidor escuchando por el puerto 8080');