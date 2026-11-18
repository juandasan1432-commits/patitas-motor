const ListasEnlazadas = require ("../src/ListaEnlazada")

//prueba 1 agregar un nodo al inicio
const lista = new ListasEnlazadas();

lista.agregarAlInicio(10)

console.log(lista.cabeza.dato)

console.log(lista.cola.dato)

console.log(lista.obtenerTamanio())

//prueba 2 agregar un nodo al final 
const lista1 = new ListasEnlazadas()

lista1.agregarAlFinal(8)

console.log("------------------- Prueba 2 -------------------------")

console.log(lista1.cabeza.dato)

console.log(lista1.cola.dato)

console.log(lista1.obtenerTamanio())


//prueba 3 con un nodo y agregando al inicio
const lista2 = new ListasEnlazadas();

lista2.agregarAlInicio(10)
lista2.agregarAlInicio(7)

console.log("-------------- prueba 3 ------------------------")

console.log(lista2.cabeza.dato)

console.log(lista2.cola.dato)

console.log(lista2.obtenerTamanio())

//prueba 4 con un nodo y agregando al final
const lista3 = new ListasEnlazadas();

lista3.agregarAlInicio(20)
lista3.agregarAlFinal(7)

console.log("-------------- prueba 4 ---------------------")

console.log(lista3.cabeza.dato)

console.log(lista3.cola.dato)

console.log(lista3.obtenerTamanio())

//prueba 5 con varios nodos, agregando al inicio
const lista4 = new ListasEnlazadas()

lista4.agregarAlInicio(5)
lista4.agregarAlFinal(8)
lista4.agregarAlFinal(9)
//agregando al inicio con varios nodos
lista4.agregarAlInicio(2)

console.log("------------ Prueba 5 --------------")

console.log(lista4.cabeza.dato)

console.log(lista4.cola.dato)

console.log(lista4.obtenerTamanio())

//prueba 6 con varios nodos, agregando al final
const lista5 = new ListasEnlazadas()

lista5.agregarAlInicio(5)
lista5.agregarAlFinal(8)
lista5.agregarAlInicio(9)
lista5.agregarAlInicio(2)
//agregando al final con varios nodos
lista5.agregarAlFinal(10)

console.log("------------ Prueba 6 --------------")

console.log(lista5.cabeza.dato)

console.log(lista5.cola.dato)

console.log(lista5.obtenerTamanio())



//Prueba metodo buscar
const buscarLista = new ListasEnlazadas()

buscarLista.agregarAlFinal(5)

buscarLista.agregarAlFinal(8)
buscarLista.agregarAlFinal(12)

function buscar1 (dato) {
    return dato === 8
}
console.log("------ prueba buscar ---------------")
console.log(buscarLista.buscar(buscar1))



//prueba metodo insertar
const lista6 = new ListasEnlazadas();

lista6.agregarAlFinal(5);
lista6.agregarAlFinal(8);
lista6.agregarAlFinal(12);

function buscarOcho (dato){
    return dato === 8
}
console.log ("------ prueba 7 --------")
lista6.insertarDespuesDe(buscarOcho,25)
console.log(lista6.aArreglo());
console.log(lista6.cabeza.dato)
console.log(lista6.cola.dato)
console.log(lista6.obtenerTamanio())


//PRUEBA DE METODO ELIMINAR(CONDICION)
const lista7 = new ListasEnlazadas()

lista7.agregarAlFinal(10)
lista7.agregarAlFinal(7)
lista7.agregarAlInicio(3)

function buscarOcho (dato){
    return dato === 10;
}
console.log("----------- prueba 8 ----------------")
console.log(lista7.eliminar(buscarOcho))
console.log(lista7.aArreglo())
console.log(lista7.cabeza.dato)
console.log(lista7.cola.dato)
console.log(lista7.obtenerTamanio())

//PRUEBAS DE CASOS BORDES MINI RETO 3.

//PRUEBA 1 ELIMINAR LISTA VACIA

const vacia = new ListasEnlazadas()

function buscar10 (dato){
    return dato === 10;
}

console.log("----------- PRUEBA 1 ----------------")
console.log(vacia.eliminar(buscar10))
console.log(vacia.aArreglo())
console.log(vacia.cabeza)
console.log(vacia.cola)
console.log(vacia.obtenerTamanio())

//PRUEBA 2 ELIMINAR EL UNICO NODO

const solo1 = new ListasEnlazadas()

solo1.agregarAlInicio(20)

function buscar20 (dato){
    return dato === 20;
}

console.log("----------- PRUEBA 2 ----------------")
console.log(solo1.eliminar(buscar20))
console.log(solo1.aArreglo())
console.log(solo1.cabeza)
console.log(solo1.cola)
console.log(solo1.obtenerTamanio())

//PRUEBA 3 ELIMINAR LA CABEZA

const cabeza = new ListasEnlazadas()

cabeza.agregarAlInicio(20)
cabeza.agregarAlInicio(22)
cabeza.agregarAlFinal(10)

function buscar22 (dato){
    return dato === 22;
}

console.log("----------- PRUEBA 1 ----------------")
console.log(cabeza.eliminar(buscar22))
console.log(cabeza.aArreglo())
console.log(cabeza.cabeza.dato)
console.log(cabeza.cola.dato)
console.log(cabeza.obtenerTamanio())

//PRUEBA 4 ELIMINAR LA COLA

const cola = new ListasEnlazadas()

cola.agregarAlInicio(3);
cola.agregarAlInicio(4);
cola.agregarAlFinal(9);
cola.agregarAlFinal(11)

function buscar11 (dato){
    return dato === 11
}

console.log("----------------- PRUEBA 4 -------------------")
console.log(cola.eliminar(buscar11))
console.log(cola.aArreglo())
console.log(cola.cabeza.dato)
console.log(cola.cola.dato)
console.log(cola.obtenerTamanio())

//PRUEBA 5 ELIMINAR algo que no existe

const inexistente = new ListasEnlazadas()

inexistente.agregarAlInicio(3);
inexistente.agregarAlInicio(4);
inexistente.agregarAlFinal(9);

function buscarinexistente (dato){
    return dato === 11
}

console.log("----------------- PRUEBA 5 -------------------")
console.log(inexistente.eliminar(buscarinexistente))
console.log(inexistente.aArreglo())
console.log(inexistente.cabeza.dato)
console.log(inexistente.cola.dato)
console.log(inexistente.obtenerTamanio())


//PRUEBA 6 INSERTAR DESPUES DE LA COLA

const insertar = new ListasEnlazadas()

insertar.agregarAlInicio(3);
insertar.agregarAlInicio(4);
insertar.agregarAlFinal(9);
insertar.agregarAlFinal(15)

function buscar15 (dato){
    return dato === 15
}

console.log("----------------- PRUEBA 6 -------------------")
console.log(insertar.insertarDespuesDe(buscar15,30))
console.log(insertar.aArreglo())
console.log(insertar.cabeza.dato)
console.log(insertar.cola.dato)
console.log(insertar.obtenerTamanio())
console.log(insertar.cola.siguiente)