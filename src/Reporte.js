const listasEnlazadas = require ("./ListaEnlazada")
const RegistroClinico = require ("./RegistroClinico")

const tabla = new listasEnlazadas ()

const registro1 = new RegistroClinico()


// ATENCIONES DE LOLA (GATA)

// Primera atención de Lola
const atencion1 = {
    mascota: "Lola (gata)",
    fecha: "02/02",
    motivo: "Vacunación anual",
    veterinario: "Dra. Ríos",
    costo: 85000
};

// Segunda atención de Lola
const atencion2 = {
    mascota: "Lola (gata)",
    fecha: "15/03",
    motivo: "Control de peso",
    veterinario: "Dr. Gómez",
    costo: 40000
};

// Tercera atención de Lola
const atencion3 = {
    mascota: "Lola (gata)",
    fecha: "20/05",
    motivo: "Limpieza dental",
    veterinario: "Dra. Ríos",
    costo: 150000
};

registro1.registrarAtencion("Lola", atencion1);
registro1.registrarAtencion("Lola", atencion2);
registro1.registrarAtencion("Lola", atencion3);


// ATENCIONES DE TOBY (PERRO)

// Primera atención de Toby
const atencion4 = {
    mascota: "Toby (perro)",
    fecha: "10/01",
    motivo: "Consulta por cojera",
    veterinario: "Dr. Gómez",
    costo: 60000
};

// Segunda atención de Toby
const atencion5 = {
    mascota: "Toby (perro)",
    fecha: "12/01",
    motivo: "Radiografía de pata",
    veterinario: "Dr. Gómez",
    costo: 120000
};

// Tercera atención de Toby
const atencion6 = {
    mascota: "Toby (perro)",
    fecha: "05/04",
    motivo: "Vacunación anual",
    veterinario: "Dra. Ríos",
    costo: 85000
};

registro1.registrarAtencion("Toby", atencion4);
registro1.registrarAtencion("Toby", atencion5);
registro1.registrarAtencion("Toby", atencion6);


// MÍA (GATA)

// Primera atención de Mía
const atencion7 = {
    mascota: "Mia (gata)",
    fecha: "18/02",
    motivo: "Esterilización",
    veterinario: "Dra. Ríos",
    costo: 280000
};

// Segunda atención de Mía
const atencion8 = {
    mascota: "Mia (gata)",
    fecha: "25/02",
    motivo: "Control posquirúrgico",
    veterinario: "Dra. Ríos",
    costo: 0
};

registro1.registrarAtencion("Mia", atencion7);
registro1.registrarAtencion("Mia", atencion8);

//mostrar el historial

function mostrarAtencion (atencion){
    console.log(atencion)
}


let precio = 0;
function totalCosto (atencion){
    precio = precio + (atencion.costo)
}

//LOLA 
console.log("---------- lola atenciones ---------")
registro1.historiales["Lola"].recorrer(mostrarAtencion);
console.log("---------- Numero De Atenciones  ---------")
console.log(registro1.historiales["Lola"].obtenerTamanio());
registro1.historiales["Lola"].recorrer(totalCosto);
console.log("el total de todas las atenciones es:", precio);


//TOBY
precio = 0;
console.log(" ");

console.log("---------- TOBY atenciones ---------")
registro1.historiales["Toby"].recorrer(mostrarAtencion);
console.log("---------- Numero De Atenciones Toby  ---------")
console.log(registro1.historiales["Toby"].obtenerTamanio());
registro1.historiales["Toby"].recorrer(totalCosto);
console.log("el total de todas las atenciones de Toby es:", precio);

//Mia
precio = 0;
console.log(" ");

console.log("---------- Mia atenciones ---------")
registro1.historiales["Mia"].recorrer(mostrarAtencion);
console.log("---------- Numero De Atenciones Mia  ---------")
console.log(registro1.historiales["Mia"].obtenerTamanio());
registro1.historiales["Mia"].recorrer(totalCosto);
console.log("el total de todas las atenciones de Mia es:", precio);

//REPORTE VACUNACION LOLA

//FUNCION PARA COMPARAR SI TIENEN ALGUNA ATENCION POR VACUNACION ACTUAL
function vacuna (atencion){
    return atencion.motivo  === "Vacunación anual"
}

//el valor del return se guarda en una variable
const vacuna1 = registro1.historiales["Lola"].buscar(vacuna)
console.log(" ");
console.log("------- REGISTRO DE VACUNACION (LOLA) ------")
console.log(vacuna1)

//REPORTE VACUNACION TOBY
const vacuna2 = registro1.historiales["Toby"].buscar(vacuna)

if(vacuna === null){
    console.log("Sin registro")
}

console.log(" ");
console.log("------- REGISTRO DE VACUNACION (TOBY) ------")
console.log(vacuna2)

//REPORTE VACUNACION MIA
const vacuna3 = registro1.historiales["Mia"].buscar(vacuna)
if(vacuna === null){
    console.log("Sin registro")
}
console.log(" ");
console.log("------- REGISTRO DE VACUNACION (MIA) ------")
console.log(vacuna3)

