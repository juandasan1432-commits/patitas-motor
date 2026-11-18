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

----------------------- punto 3 mini reto3 ----------------------------------------

# Punto 3. Método eliminar(condicion)

**Objetivo:** Eliminar el primer nodo que cumpla la condición, sin cortar las conexiones de nuestra lista, y devolver el dato eliminado.

## Caso 1. Eliminar la cabeza

**Antes:**


cabeza                  cola
   ↓                      ↓
  [5] → [8] → [12] → null
   ↑
 actual

anterior = null
tamanio = 3


**Después:**


cabeza          cola
   ↓              ↓
  [8] → [12] → null

tamanio = 2


**Explicación:**

Como `anterior` es `null`, significa que estamos en la cabeza. Actualizamos la cabeza para que apunte al siguiente nodo.

`this.cabeza = actual.siguiente`

-------------------------------------------------------------------------------


## Caso 2. Eliminar un nodo intermedio

**Antes:**


cabeza                  cola
   ↓                      ↓
  [5] → [8] → [12] → null
   ↑     ↑
anterior actual

tamanio = 3


**Después:**


cabeza          cola
   ↓              ↓
  [5] ───→ [12] → null

tamanio = 2


**Explicación:**

El nodo anterior (`5`) deja de apuntar al nodo actual (`8`) y pasa a apuntar al siguiente nodo (`12`).

`anterior.siguiente = actual.siguiente`

Así eliminamos el nodo sin cortar nuestra lista.

------------------------------------------------------------------------------------

## Caso 3. Eliminar la cola

**Antes:**


cabeza                  cola
   ↓                      ↓
  [5] → [8] → [12] → null
         ↑      ↑
      anterior actual

tamanio = 3


**Después:**


cabeza       cola
   ↓           ↓
  [5] → [8] → null

tamanio = 2


**Explicación:**

El nodo anterior (`8`) deja de apuntar al nodo `12` y pasa a apuntar a `null`.

Después actualizamos la cola para que apunte al nodo anterior.

`anterior.siguiente = actual.siguiente`

`this.cola = anterior`

En los tres casos disminuimos `this.tamanio` en uno y devolvemos el dato eliminado.


------------------------------- PUNTO 6 MINIRETO 3-------------------------------------

# Punto 6 Complejidad de las operaciones

**Objetivo:** Identificar la complejidad de los métodos `buscar(condicion)`, `insertarDespuesDe(condicion, dato)` y `eliminar(condicion)`.

## 1. Método buscar(condicion) — O(n)

Este método tiene complejidad **O(n)** porque necesita recorrer nuestra lista hasta encontrar el primer nodo que cumpla la condición.

Si el dato está al final o no existe, puede necesitar revisar todos los nodos.

**Ejemplo:**

```text
cabeza                    cola
   ↓                        ↓
  [5] → [8] → [12] → [20] → null
   1     2      3      4
```

Si buscamos el `20`, debemos revisar los cuatro nodos.

## 2. Método insertarDespuesDe(condicion, dato) — O(n)

Este método tiene complejidad **O(n)** porque primero debemos recorrer la lista para encontrar el nodo después del cual queremos insertar.

Una vez lo encontramos, conectar el nuevo nodo es una operación **O(1)**, porque solo actualizamos las referencias.

**Ejemplo:**

```text
ANTES:

cabeza                  cola
   ↓                      ↓
  [5] → [8] → [12] → null

DESPUÉS DE INSERTAR 25:

cabeza                         cola
   ↓                             ↓
  [5] → [8] → [12] → [25] → null
```

Debemos buscar el `12` para poder insertar el `25` después.

## 3. Método eliminar(condicion) — O(n)

Este método tiene complejidad **O(n)** porque puede necesitar recorrer toda la lista buscando el nodo que queremos eliminar.

Utilizamos `actual` para saber en qué nodo estamos y `anterior` para recordar cuál está antes.

Cuando encontramos el nodo, actualizamos las conexiones y disminuimos el tamaño.

## 4. ¿Por qué eliminar la cola requiere recorrer la lista?

En una lista simplemente enlazada, cada nodo conoce solamente al siguiente nodo, pero no al anterior.

Aunque tenemos `this.cola` para saber cuál es el último nodo, no podemos retroceder directamente al que está antes.

**Ejemplo:**

```text
ANTES:

cabeza                    cola
   ↓                        ↓
  [5] → [8] → [12] → null
         ↑      ↑
      anterior actual
```

Si queremos eliminar el `12`, debemos encontrar primero el nodo `8`, que está antes de la cola.

Para eso recorremos nuestra lista desde la cabeza.

Después hacemos:

`anterior.siguiente = actual.siguiente`

Esto hace que el nodo `8` deje de apuntar al `12` y pase a apuntar a `null`.

Luego actualizamos la cola:

`this.cola = anterior`

**Resultado:**

```text
DESPUÉS:

cabeza       cola
   ↓           ↓
  [5] → [8] → null
```

El nodo `8` ahora es la nueva cola.

Por eso eliminar la cola tiene complejidad **O(n)** en el caso general, ya que necesitamos recorrer la lista para encontrar el nodo anterior.

**Caso especial:** si la lista tiene un solo nodo, podemos eliminarlo en O(1), porque ese nodo es cabeza y cola al mismo tiempo.

## 5. Conclusión

Los tres métodos tienen complejidad O(n) en el peor caso, porque pueden necesitar recorrer toda nuestra lista.

O(1) significa que podemos realizar una operación directamente, sin que aumente la cantidad de pasos según el tamaño de la lista.

O(n) significa que la cantidad de pasos puede aumentar dependiendo de cuántos nodos tenga nuestra lista.

Aprendimos que lo más importante al eliminar o insertar es actualizar correctamente las referencias para no dejar nuestra lista cortada.