
const fs = require('fs');
let consola = console.log;

let listadoPorHacer = [];

const guardarDB = () => {

    // JSON.stringify(listadoPorHacer) convierto los datos en json válido
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar el archivo!!');
        console.log('El archivo ha sido creado correctamente!');
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

getListado = () => {
    return require('../db/data.json');
}

actualizar = function(descripcion, completado = true) {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    else {
        return false;
    }
}



module.exports = {
    crear,
    getListado,
    actualizar
}