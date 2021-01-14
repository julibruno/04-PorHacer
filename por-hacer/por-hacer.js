

const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');


let listadoPorHacer = [];

const guardarDB = () =>{
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json',data,(err)=>{
        if(err)
            throw new Error(err)
        else
        resolve('Se ha creado la tarea')
    })

}

const cargarDB = () => {
    
    try{
    // esto lo que me permite es que el array tenga lo que tengo en el.json
    listadoPorHacer =  require('../db/data.json');
    // Si el archivo json esta vacio va a tirar error por eso se hace el TRY
        }
        catch(e){
              listadoPorHacer=[]  

              // si esta vacio el json le coloco corchetes para que no patee

        }
}


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    return porHacer;
}

const getListado = () => { 
 cargarDB();

return listadoPorHacer;

}


const actualizar = (descripcion, completado= true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    //valido si encontro algo
    if(index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB()
        return true;
    }else{
        return false;
    }
        
}

const borrar = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(objeto =>{
        return objeto.descripcion === descripcion
    })

    if(index >=0){
        listadoPorHacer.splice(index,1);
        guardarDB();
        return true;
    }else{
        return false;
    }
}

module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}