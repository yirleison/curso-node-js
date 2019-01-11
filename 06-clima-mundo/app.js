
const argv = require('yargs').options({

    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let consola = console.log;

consola(argv.direccion);