
let consola = console.log;
let empleados = [
    {
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

let salario = [
    {
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
let getEmpleado = (id, callback)=>{
    let empleadoDB = empleados.find(empleado => empleado.id == id); 
    consola(empleadoDB); 
}

getEmpleado(1);