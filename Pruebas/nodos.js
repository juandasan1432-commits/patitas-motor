const Nodo = require("../src/Nodo")

const atencion1 = {
    Fecha : "02/02",
    motivo: "vacunacion",
    veterinario: "Dra.Rios",
    costo: 85000
}
const atencion2 = {
    Fecha : "15/03",
    motivo: "control de peso",
    veterinario: "Dr.Gomez",
    costo: 40000
}
const atencion3 = {
    Fecha : "20/05",
    motivo: "limpieza dental",
    veterinario: "Dra.Rios",
    costo: 150000
}
//creo los 3 nodos
const nodo1 = new Nodo (atencion1);
const nodo2 = new Nodo (atencion2);
const nodo3 = new Nodo (atencion3);
 
//le doy la referencia al nodo
nodo1.siguente = nodo2;   
nodo2.siguente = nodo3;

// declaro cabeza
const cabeza = nodo1;

//recorre cadena, nodo por nodo y imprimir resultado

let actual = cabeza;

while (actual !== null  ){
    console.log(actual.dato)
    actual= actual.siguente;
}

// calcular costo todo el historial
let actual1 = cabeza;
let total = 0;
while (actual1 !== null){
    total = total + (actual1.dato.costo);
    actual1 = actual1.siguente;
}
console.log(total)
   