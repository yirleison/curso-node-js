const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Lista todas las tareas por hacer o que esten completadas', {
        listar: {
            alias: 'l',
            demand: true,
            desc: 'Lista todas las tareas pendientes o completadas'
        }
    })
    .command('borrar', 'Elimina una activad pendiente o completada', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}