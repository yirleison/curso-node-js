let consola = console.log;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
consola(argv);
let comando = argv._[0];

switch (comando) {

    case 'crear':
        consola('Crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        break;
    case 'listar':
        consola('Mostarar todas las tareas por hacer');
        break;
    case 'actualizar':
        consola('Actualiza una tarea por hacer');
        break;
    default:
        consola('Comando no reconocido');
        break;
}