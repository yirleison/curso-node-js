const express = require('express')
const hbs = require('hbs');
require ('./hbs/helpers');
const app = express();
let consola = console.log;

const port = process.env.POT || 3000;

//midleware => sirve para ejecutar acciones antes de que se ejecute una petición solicitada desde la web u otra parte
app.use ( express.static(__dirname + '/public') )
//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
   
    res.render('home',{
        nombre: 'Yirleison'
    });
})

app.get('/about', (req, res) => {
   
   res.render('about');
})
 
app.listen(port,() => {
    consola(`Escuchando   el servidor en el puerto ${3000}`);
})