var consola = console.log;
let nombre = 'Deadpool';
let real = 'Wade Winston';


consola(nombre + '' +real);
consola(`${ nombre } ${ real }`);

/** Template string*/
let nombreCompleto = nombre + ' ' + real;
let nombreTemplate = `${ nombre } ${ real }` ;

consola( nombreCompleto === nombreTemplate);

function getNombre () {
    return `${ nombre } ${ real }`
}

consola(`El nommbre de : ${ getNombre() }`);