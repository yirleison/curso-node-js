const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar',{
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias:'l',
            default: 10
        }
    })
    .command('crear', 'Genera un archivo con la tabla de multiplicar',{
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias:'l',
            default: 10
        }
    })
    .help()
    .argv
    
let { crearArchivo,listarArchivo } = require('./multiplicar/multiplicar');

let consola = console.log;

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch ( comando ) {
    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => consola(`Archivo creado  ${base}`))
            .catch(err => consola(err)); 
        break;
    case 'listar':
        listarArchivo(base,limite)
        break;
    default:
        consola('Comando no reconocido');
        break;
}


