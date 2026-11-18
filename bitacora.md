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


## Punto 1(MiniReto2) Agregar nodos al inicio y al final de una lista enlazada

### . Lista vacía — Agregar al inicio

**Antes:**

cabeza → null

**Después:**

cabeza → [Nuevo] → null


- La cabeza antes apuntaba a `null`.
- Ahora la cabeza apunta al nuevo nodo.
- El nuevo nodo apunta a `null` porque es el único.

### . Lista vacía — Agregar al final

**Antes:**


cabeza → null


**Después:**

cabeza → [Nuevo] → null


- Como la lista está vacía, el nuevo nodo se convierte en la cabeza.
- Su siguiente queda en `null`.
- Agregar al inicio o al final de una lista vacía da el mismo resultado.

###  Lista con un nodo — Agregar al inicio

**Antes:**


cabeza → [Nodo 1] → null


**Después:**


cabeza → [Nuevo] → [Nodo 1] → null


- El nuevo nodo apunta al antiguo primer nodo.
- La cabeza cambia y ahora apunta al nuevo nodo.
- El Nodo 1 sigue apuntando a `null`.

###  Lista con un nodo — Agregar al final

**Antes:**


cabeza → [Nodo 1] → null


**Después:**


cabeza → [Nodo 1] → [Nuevo] → null


- El Nodo 1 cambia su siguiente de `null` al nuevo nodo.
- El nuevo nodo apunta a `null`.
- La cabeza no cambia porque sigue apuntando al Nodo 1.

###  Lista con varios nodos — Agregar al inicio

**Antes:**


cabeza → [Nodo 1] → [Nodo 2] → [Nodo 3] → null


**Después:**


cabeza → [Nuevo] → [Nodo 1] → [Nodo 2] → [Nodo 3] → null


- El nuevo nodo apunta al Nodo 1.
- La cabeza cambia y ahora apunta al nuevo nodo.
- Las conexiones entre los otros nodos se mantienen.

###  Lista con varios nodos — Agregar al final

**Antes:**


cabeza → [Nodo 1] → [Nodo 2] → [Nodo 3] → null


**Después:**


cabeza → [Nodo 1] → [Nodo 2] → [Nodo 3] → [Nuevo] → null


- El Nodo 3 cambia su siguiente de `null` al nuevo nodo.
- El nuevo nodo apunta a `null` porque queda de último.
- La cabeza sigue apuntando al Nodo 1.

### Conclusión

- Cuando agregamos un nodo al inicio, la cabeza debe apuntar al nuevo nodo.
- Cuando agregamos un nodo al final, cambiamos la referencia `siguiente` del último nodo.
- Si la lista está vacía, el nuevo nodo se convierte en la cabeza.
- Las referencias permiten mantener conectados los nodos sin perder el recorrido de la lista.