/***
 * Async Await
 */

/***
 * Cuando utilizamos la palabra reservada de ecma script 7 async, estamos indicando de que sa funcion es asincrona, y con solo utilizar el async
 * estamos retornando un apromesa ejemplo:
 */

/**
   let getEmpleado = (id) => {

       return new Promise((resolve, reject) => {
           let empleadoDB = empleado.find(empleado => empleado.id === id);
           if (!empleadoDB) {
               reject(`No se en contro un empleado con el id: ${id} en la base de datos`);
           } else {
               resolve(empleadoDB);
           }
       })
   }   
 */

let consola = console.log;

let getNombre = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Yirleison');
        }, 3000);
    });
}

/***
    Para poder utilizar el await, se debe utilizar por obligación en la funcion el async, nota: el async si se puede utilizar solo.
    esto con el fin de que las funciones que devuelven promesas, se resuelvan de manera sincrona utilizando estas dos palabras reservadas.<
*/

let saludo = async () => {
    let nombre = await getNombre();
    return `Hola ${ nombre }`;
}

saludo().then(
        mensaje => {
            consola(mensaje);
        })
    .catch(err => {
        consola('Error de ASYNC', e);
    })