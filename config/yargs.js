const opts = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado:{
        alias:'c',
        default: true
    }

}


const argv = require('yargs')
.command('crear','Crea un elemento por hacer',opts) 
.command('actualizar','Actualiza el estado completado de una tarea',opts) 
.command('borrar','Borra el elemento que estas mandando',opts) 
.help()
.argv;



module.exports={
    argv
}