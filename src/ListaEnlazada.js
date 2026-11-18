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

            //actualizo, aqui ya el nodo se agrego a mi lista.
            //Pero la cola sigue referenciada con nodo2.
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

    estaVacia() {
    // verificamos si la cabeza es null
    // devolvemos true o false
    return this.cabeza === null;
}


    obtenerTamanio() {
    // devolvemos la cantidad de nodos
    return this.tamanio;
}
}

module.exports = ListaEnlazadas