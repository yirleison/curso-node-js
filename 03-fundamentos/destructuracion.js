/** */

var consola = console.log;

let deadpool = {
    nombre : 'Wade',
    apellido : 'Winston',
    poder : 'Regeneracion',
    getNombre: function(){
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`
    }
}

consola(deadpool.getNombre());

/**Nomalmente si queremos obtener algun dato del json lo hacemos de la siguiente manera */

//let nombre = deadpool.nombre;
//let apellido = deadpool.apellido;
//let poder = deadpool.poder;

/**Con destructuracion las podemos obtener de la siguiente manera */

let { nombre: primerNombre, apellido, poder } = deadpool;

consola(primerNombre, apellido, poder);
