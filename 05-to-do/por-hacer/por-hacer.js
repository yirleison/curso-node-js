
const fs = require('fs');


let listadoPorHacer = [];

const crear = (descripcion) => {
    let porHcer = {
        descripcion,
        completado : false
    };

    listadoPorHacer.push(porHcer);
 
    return porHcer;
}


module.exports = {
    crear
}