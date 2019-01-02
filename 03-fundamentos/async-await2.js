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

let getEmpleado = async (id) => {

        let empleadoDB = empleado.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            throw new Error (`No se en contro un empleado con el id: ${id} en la base de datos`);
        } else {
            return empleadoDB;
        }
}

let getSalario = async (empleado) => {

        let salarioDB = salario.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            throw new Error (`No se en contro un salario para: ${empleado.nombre} en la base de datos`);
        } else {
            return{
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salarioDB.salario
            }
        }
};

let getInformacion = async (id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `${ resp.nombre } tiene un salario de ${ resp.salario }$`;
}

getInformacion(2).then(
    mensaje => {
        consola(mensaje);
    })
    .catch(err => {
        consola(err)
    })