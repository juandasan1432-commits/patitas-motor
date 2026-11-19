const listasEnlazadas = require("./ListaEnlazada")

class registroClinico{
    constructor (){
        this.historiales = {}
    }

    registrarAtencion(mascota, atencion){
        //SI el objeto historiales, en [mascota] no tiene ninguna atencion registrada creara una nueva atencion.
        if(this.historiales[mascota] == undefined){
        this.historiales[mascota] = new listasEnlazadas()
        }
        //si el objeto historiales ya tiene alguna atencion, no entra al if o sea que la atencion que vamos a registrar nueva pasara al final.
        this.historiales[mascota].agregarAlFinal(atencion)
    }
  
}



module.exports = registroClinico
