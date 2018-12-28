var consola = console.log;


/**Una funcion de flecha puede reemplazar cualquier funcion normal pero hay unas excepciones que se deben de contemplar
 * 
 */
/** Si la funcion retorna un dato en una sola linea se puede manejar de la siguiente manera*/

let sumar = (a, b) => a + b;

let saludar = () => 'Hola mundo';

let saludo = nombre => `${ nombre }`;

let deadpool = {
    nombre : 'Wade',
    apellido : 'Winston',
    poder : 'Regeneracion',
    getNombre(){
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`
    }
}

consola(sumar(6,5));
consola(saludar());
consola(saludo('Front'));
consola(deadpool.getNombre());




