const argv = require('./config/yargs').argv;
    
let { crearArchivo,listarArchivo } = require('./multiplicar/multiplicar');

let consola = console.log;

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch ( comando ) {
    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => consola(`Archivo creado - tabla del ${base} al ${ limite }`))
            .catch(err => consola(err)); 
        break;
    case 'listar':
        listarArchivo(base,limite)
        break;
    default:
        consola('Comando no reconocido');
        break;
}
