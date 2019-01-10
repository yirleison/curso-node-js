let consola = console.log;

const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
//consola(argv);
let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        listado.forEach(element => {
            consola(colors.green("================Por hacer================"));
            consola(element.descripcion);
            consola('Estado : ',element.completado);
            consola("=========================================".green);
        });
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion,argv.completado);
        consola(actualizado);
        break;
    default:
        consola('Comando no reconocido');
        break;
}