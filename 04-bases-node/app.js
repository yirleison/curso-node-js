let { crearArchivo } = require('./multiplicar/multiplicar');
let consola = console.log;


let argv = process.argv;

argv = argv[2];
let base = argv.split('=')[1];

consola(base);

crearArchivo(base)
.then(archivo => consola(`Archivo creado la tabla # ${base}`))
.catch(err => consola(err));

  