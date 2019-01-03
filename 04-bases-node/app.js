let { crearArchivo } = require('./multiplicar/multiplicar');
let consola = console.log;
let base = 2;


crearArchivo(base)
.then(archivo => consola('Archivo creado'))
.catch(err => consola(err));

  