const argv = require('yargs')
.command('crear','Crear un elemento por hacer',{
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
})
.command('actualizar','Actualiza el estado completado de una tarea',{
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }
})
.command('listar', 'Lista todas las tareas por hacer o que esten completadas', {
    listar: {
        alias: 'l',
        demand: true,
        desc:'Lista todas las tareas pendientes o completadas'
    }
})
.help()
.argv;

module.exports = {
    argv
}