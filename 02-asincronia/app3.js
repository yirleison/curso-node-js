
//Ejemplo asincronía

let consola = console.log;

consola('Inicio del programa ');

    setTimeout( function(){
        consola('Primer Timeout');
    },3000 );

    setTimeout( function(){
        consola('Segundo Timeout');
    },0 );
 
    setTimeout( function(){
        consola('Tercer Timeout');
    },0 );

    consola('Fin del programa');

