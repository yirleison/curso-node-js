let consola = console.log;
let empleados = [{
        id: 1,
        nombre: 'Jonatan'
    },
    {
        id: 2,
        nombre: 'Camilo'
    },
    {
        id: 3,
        nombre: 'Sebastian'
    }
];

let salario = [{
        id: 1,
        salario: 1400000
    },
    {
        id: 2,
        salario: 2000000
    }
];

/*
* Como el retorno es de una sola linea se puede simplificar de la siguiente manera:
  forma norma:
   let empleadoDB = empleados.find(empleado => { 
        return empleado.id === id;
   });  

   forma simplificada :
     let empleadoDB = empleados.find(empleado => empleado.id == id);  
*
*/
let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id == id);
    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`);
    } else {
        callback(null, empleadoDB);
    }
};

let getSalario = (empleado, callback) => {
    let salarioDB = salario.find(salario => salario.id == empleado.id);

    if (!salarioDB) {
        callback(`No se encontró un salario para el empleado ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });
    }
};

getEmpleado(3, (err, empleado) => {
    if (err) {
        return consola(err);
    } else {
        getSalario(empleado, (err, data) => {
            if (err) {
                return consola(err);
            } else {
                consola(`El salario de ${ data.nombre } es de ${ data. salario }$`);
            }
        });
    }
});