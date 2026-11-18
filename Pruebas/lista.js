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
