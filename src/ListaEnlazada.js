const Nodo = require("./Nodo")

class ListaEnlazadas{
    constructor (){
        this.cabeza = null
        this.cola = null
        this.tamanio = 0
    }

    // metodo para agregar datos al final de cada nodo
    agregarAlFinal(dato){

        //creo un nuevo nodo, con la clase Nodo
        const nuevoNodo = new Nodo (dato)

        //condiciono, si la lista esta vacia, la cabeza y la cola van a hacer igual a nuevoNodo
        if(this.cabeza === null){
            this.cabeza = nuevoNodo
            this.cola = nuevoNodo

            
        } else{
            
            //asigno que si hay mas nodos se agregue en la cola
            this.cola.siguiente = nuevoNodo

            //actualizamos para que la cola sea el nuevoNodo
            this.cola = nuevoNodo
        }

        //cada vez que entre un nodo nuevo, el tamaño crece de a uno
        this.tamanio++;
    }


    //metodo para agregar datos a mi nodo al principio
    agregarAlInicio(dato){

        //creo un nuevo nodo, con la clase Nodo
        const nuevoNodo = new Nodo (dato)

        //condiciono, si la lista esta vacia, la cabeza y la cola van a hacer igual a nuevoNodo
        if(this.cabeza === null){
            this.cabeza = nuevoNodo
            this.cola = nuevoNodo

            
        } else{
            
            //asigno que si hay mas nodos, el nodo que agrege apunte a la anterior cabeza, que tome referencia del nodo que estaba antes de primero.
            nuevoNodo.siguiente = this.cabeza

            //actualizo, se agrega el nuevoNodo a la primero posicion se remplaza la cabeza vieja por nuevoNodo
            this.cabeza = nuevoNodo
        }

        //cada vez que entre un nodo nuevo, el tamaño crece de a uno
        this.tamanio++;
    }

    //metodo para recorrer la lista y ejecute una funcion que se pasa como parametro.
    recorrer(callback){
        let actual = this.cabeza;
        while (actual !== null){
            callback (actual.dato);
            actual = actual.siguiente;
        }
    }

//creo el metodo arreglo me sirve para convertir todos mis nodos a array:
    aArreglo(){
        //creo variable donde se guadara el arreglo
        const arreglo = []

        //creo variable de posicion para el while
        let actual = this.cabeza

        //ciclo while hasta que actual (posicion) no sea igual a null, nunca para
        while (actual!==null){

            //tenemos un arreglo vacio, vamos agregando los datos de la lista en la posicion actual
            arreglo.push(actual.dato)
            //que siga para el otro nodo
            actual = actual.siguiente
        }
          //trae el resultado del array con los datos agregados
          return arreglo; 
    }

    //verificamos si la lista esta vacia 
    estaVacia() {
    // verificamos si la cabeza es null
    // devuelve si es true o false
    return this.cabeza === null;
}
    //obtenemos el tamaño de la lista
    obtenerTamanio() {
    // devolvemos la cantidad de nodos
    return this.tamanio;
}

//condicion buscar
buscar(condicion){
    
    let actual = this.cabeza;

    while (actual !== null){

        if (condicion(actual.dato)){
            return actual.dato
        }
        actual = actual.siguiente;
    }

    return null

}

//insertarDespuesDe
insertarDespuesDe(condicion, dato){
    let actual = this.cabeza;

    while(actual !== null){

        //si la condicion se cumple en la posicion actual.dato seguira
        if(condicion(actual.dato)){

            //si se cumple condicion, crea un nuevo nodo 
            const nodo1 = new Nodo (dato);

            //el nuevo nodo1 que inserte apunta al nodo despues del actual 
            nodo1.siguiente = actual.siguiente

            //el actual me va apuntar a el nodo1 que estoy insertando
            actual.siguiente = nodo1

            // si el nodo va a ser el ultimo (cola) entre
            if (actual === this.cola){
                this.cola = nodo1
            }

            //aumenta de tamaño si agrego otro nodo
            this.tamanio++;
            return dato
            }

            actual = actual.siguiente

    }
}

//ELIMINAR(CONDICION)
eliminar(condicion){
    let actual = this.cabeza
    let anterior = null

    while (actual !== null){ 

        if(condicion(actual.dato)){
        //variable para gurdar el dato eliminado
        const eliminado = actual.dato
            //condicion, si anterior es igual a null, es la cabeza
            if(anterior === null){
                this.cabeza = actual.siguiente
            }
            
            //condicion, si anterior es diferente de null, el nodo anterior a la posicion actual, apuntara al nodo que le sigue a la posicion actual
            if(anterior !== null){
                anterior.siguiente = actual.siguiente
            }

            //condicion, si actual es igual a la cola, actualizar la cola al nodo anterior
            if(actual === this.cola){
                this.cola = anterior;
            }

            //disminuir tamaño
              this.tamanio--;

            //devolver el dato eliminado 
             return eliminado
        
        }
        //definimos como se avanza. anterior siempre va a ser actual, y actual va a ser el nodo siguiente.
        anterior = actual;
        actual= actual.siguiente

    }
    //si no encontramos el nodo, va a saltar null (no existente )
    return null 


}
}

module.exports = ListaEnlazadas