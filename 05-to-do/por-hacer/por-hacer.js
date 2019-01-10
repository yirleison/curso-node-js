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

actualizar = function (descripcion, completado = true) {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

/*
    var heroes = [
        {name: “Batman”, franchise: “DC”},
        {name: “Ironman”, franchise: “Marvel”},
        {name: “Thor”, franchise: “Marvel”},
        {name: “Superman”, franchise: “DC”}
    ];

    var marvelHeroes =  heroes.filter(function(hero) {
        return hero.franchise == "Marvel";
    });

*/

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    let tamanoListaActual = listadoPorHacer.length;

    if (index => 0) {

        listadoPorHacer = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

        //consola(`Listado actual ===> ${tamanoListaActual} === Tamaño listado despues de borrado ${listadoPorHacer.length} `.red);

        if (listadoPorHacer.length === tamanoListaActual) {
            return false;
        } else {
            guardarDB();
            return true;
        }
    } else {
        return false;
    }
}



module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}