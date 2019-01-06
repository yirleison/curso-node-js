const fs = require('fs');
let data = '';
let t ='';
let consola = console.log;

let crearArchivo = (base,limite = 10 ) => {

    return new Promise ((resolve, reject) => {
        if( !Number(base) ){
            reject('No es un numero');
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data+=`${ base } * ${ i } = ${ base * i }\n`;
          }
          
          fs.writeFile(`tablas/tabla-${ base } - al ${ limite }.txt`, data, (err) => {
              if (err) 
                reject(err)
              else
                resolve(`tabla-${ base }-al ${ limite }.txt`)
            });
    });
}

let listarArchivo = ( base, limite ) =>{

   
    for (let i = 1; i <= limite; i++) {
        consola(`${ base } * ${ i } = ${ base * i }\n`);
      }

}

module.exports = {
    crearArchivo,
    listarArchivo
}
