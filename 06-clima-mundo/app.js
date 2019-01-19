
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let consola = console.log;

let getInfo = async (direccion) => {   
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.clima(coors.lat, coors.lng);
        return `El clima en ${ coors.direccion } es de ${ temp }`;
    } catch (error) {
        return `No se pudo determinar el clima en la ciudad ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(temp => consola(temp))
    .catch(e => consola('ERROR !!', e)); 