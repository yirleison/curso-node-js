/** Cuando declaro una variable con let, no la puedo volver a inicizar, mas sí se puede combar su valor */
 let nombre = 'Wolverine';
var consola = console.log;

if( true ) {
    /**Aquí es valido por que se encuentra declarado en scopes diferentes */
    let  nombre = 'Magneto';
}

consola(nombre);
let i = 'Hola mundo';

for ( let i = 0; i<= 5; i++) {
    consola(`ì: ${i}`);
}

consola(i);