# Patitas-motor v0.1

## ¿Qué es el proyecto?

Patitas-motor es un proyecto desarrollado en JavaScript para administrar los historiales clínicos de una veterinaria.

Permite registrar las atenciones de diferentes mascotas, consultar sus historiales, buscar atenciones, insertar y eliminar registros, calcular el número de atenciones y sumar sus costos.

## ¿Cómo ejecutar el proyecto?

1. Tener instalado Node.js.
2. Abrir el proyecto `patitas-motor` en Visual Studio Code.
3. Abrir la terminal en la carpeta principal del proyecto.
4. Ejecutar el siguiente comando:


node src/reporte.js

Este comando muestra los historiales clínicos de Lola, Toby y Mía, con sus atenciones, cantidades, costos totales y vacunaciones registradas.

## Estructuras de datos del proyecto

**Nodo (`Nodo.js`):** representa cada elemento de la lista enlazada. Contiene un dato y una referencia al siguiente nodo.

**Lista enlazada (`ListaEnlazada.js`):** organiza las atenciones mediante nodos conectados. Permite agregar, recorrer, buscar, insertar y eliminar registros.

**Objeto (`RegistroClinico.js`):** utiliza `historiales = {}` para organizar las mascotas. Cada nombre funciona como clave y su valor es una lista enlazada con las atenciones correspondientes.

**Reporte (`reporte.js`):** registra las atenciones de las mascotas y utiliza los métodos de las listas enlazadas para consultar y mostrar su información.