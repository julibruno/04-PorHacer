//const argv= require('yargs').argv;

const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

const colors = require('colors')

let comando = argv._[0]


// console.log(argv);

switch (comando){
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)

        console.log(tarea)

        porHacer.guardarDB()
        

    break;
    case 'listar':
         let listado = porHacer.getListado();

        for (let tarea of listado) {
            // const element = array[index];

            console.log('=======Tarea por hacer========'.green)
            console.log(tarea.descripcion)
            console.log(`Estado ${tarea.completado}`)
            console.log('=============================='.green)
            
        }


    break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        
        console.log(actualizado)
    
    break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if(borrado){
            console.log("Se ha borrado correctamente")
        }else{
            console.log("No se encontro dicho registro. Reintente")
        }
    break;

    default:
        console.log("No se recono ce el comando")

}