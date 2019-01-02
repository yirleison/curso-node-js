let consola = console.log;

let empleado = [{
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

let getSalario = (empleado) => {

    return new Promise((resolve,reject) => {

        let salarioDB = salario.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject(`No se en contro un salario para: ${empleado.nombre} en la base de datos`);
        } else {
            resolve({
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salarioDB.salario
            })
        }
    });
};

getEmpleado(11).then(empleado => {

        return getSalario(empleado);
       
    })
    .then(data => {
        consola(`El salario de ${ data.nombre } es de ${ data.salario }`);
    })
    .catch(err => {
        consola(err)
    });