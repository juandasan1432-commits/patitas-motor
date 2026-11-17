**Diagrama de nodos y pérdida de enlace**

cabeza
              |
              v
[ Nodo 1: Vacunación ]
[ 02/02 - $85.000   ]
              |
              v
             null

       ENLACE PERDIDO

[ Nodo 2: Control de peso ]
              |
              v
           perdido
[ Nodo 3: Limpieza dental ]
              |
              v
             null

**Que ocurre cuando asignamos null**

- Primero creamos tres nodos con las atenciones de Lola y los conectamos usando `siguiente`.
- Declaramos `cabeza` para tener la referencia al primer nodo.
- Después cambiamos `nodo1.siguiente` a `null` para perder la conexión con el segundo nodo. 
- Al ejecutar el `while`, solamente imprime la primera atención porque ya no puede avanzar al segundo nodo.
- El costo total pasa de $275.000 a $85.000 porque solamente recorre el primer nodo.
- Los otros nodos siguen existiendo, pero no podemos llegar a ellos desde `cabeza` porque se perdió el enlace.