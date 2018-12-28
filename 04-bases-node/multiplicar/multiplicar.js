const fs = require('fs');
let data = '';

let consola = console.log;

crearArchivo= (base) =>{

    return new Promise ((resolve, reject)=>{

        for (let i = 1; i < 1 <= 10; i++) {
            data+=`${ base } * ${ i } = ${ base * i }\n`;
          }
          
          fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
              if (err) reject(err)
              else
                resolve(`tabla-${ base }.txt`)
            });
    });
}
