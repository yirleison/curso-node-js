const express = require('express')
const app = express();
let consola = console.log;

//midleware => sirve para ejecutar acciones antes de que se ejecute una petición solicitada desde la web u otra parte
app.use ( express.static(__dirname + '/public') )
//Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
   
    res.render('home',{
        nombre: 'Yirleison',
        anio: new Date().getFullYear()
    });
})
 
app.listen(3000,() => {
    consola('Escuchando   el servidor en el puerto 3000');
})