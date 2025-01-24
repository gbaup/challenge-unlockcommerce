## 🔒️ Challenge UnlockCommerce

## **Diseño de la solución - Ejercico 5**

### **Objetivo**

Diseñar un sistema de carrito de compras que permita:

1. **Agregar productos al carrito.**
2. **Validar el stock disponible antes de agregar productos.**
3. **Aplicar cupones de descuento sobre el total del carrito.**
4. **Simular el pago en cuotas con interés.**
5. **Mostrar un resumen del carrito con todos los detalles.**

---

### **Componentes Principales**

#### **1. Producto**

- Cada producto será representado por un objeto con los siguientes atributos:
    - `id`: Identificador único.
    - `nombre`: Nombre del producto.
    - `precio`: Precio unitario.
    - `stockDisponible`: Cantidad en stock.

#### **2. Carrito**

- El carrito será un array que almacenará los productos seleccionados. Cada elemento del carrito incluirá:
    - `id`: Identificador del producto.
    - `nombre`: Nombre del producto.
    - `precio`: Precio unitario del producto.
    - `cantidad`: Cantidad seleccionada por el usuario.

#### **3. Descuentos**

- Se crea una función que calcula el precio final aplicando el descuento.

#### **4. Pagos en Cuotas**

- El sistema calculará el monto de cada cuota utilizando una fórmula de interés compuesto.

---

### **Diagrama de Flujo (Flow)**

```plaintext
Inicio
  |
  |-> Usuario selecciona un producto y la cantidad.
        |
        |-> Verificar stock disponible.
              |-> Si hay stock suficiente:
                    |-> Agregar producto al carrito.
              |-> Si no hay stock suficiente:
                    |-> Mostrar mensaje de error.
        |
  |-> Usuario aplica un descuento (suponemos la implementación de un sistema de cupones).
        |
        |-> Validar el cupón.
              |-> Si el cupón es válido:
                    |-> Aplicar descuento al total.
              |-> Si el cupón es inválido:
                    |-> Mostrar mensaje de error.
        |
  |-> Usuario selecciona el número de cuotas y el interés.
        |
        |-> Calcular cuotas.
              |-> Mostrar monto de cada cuota.
        |
Fin
```

---

### **Estructura del Código**

#### **1. Archivos**

- `productos.json`: Archivo JSON con la lista de productos, simulando una base de datos.
- `carrito.js`: Contiene las funciones para gestionar el carrito (agregar, ver, calcular precio etc.).
- `sistema.js`: Archivo principal que integra las funciones de los moódulos.

---

### **Funciones principales**

#### **1. Gestión del Carrito**

- **`agregarProducto(carrito, producto, cantidad)`**:
    - Valida el stock disponible.
    - Si hay stock suficiente, agrega el producto al carrito.

- **`verCarrito(carrito)`**:
    - Muestra un resumen del carrito.

#### **2. Aplicación de Cupones**

- **`calcularPrecioFinal(precio, descuento)`**:
    - Calcula el total con el descuento aplicado.
    - Se podría implementar un sistema de cupones, recibiendo un string como parámetro en vez del valor numérico,
      realizando la validación correspondiente.

#### **3. Simulación de Pagos**

- **`simularPagosEnCuotas(monto, cuotas, interesMensual)`**:
    - Calcula el monto de cada cuota utilizando la fórmula de interés compuesto.

---

### **Pseudocódigo**

```plaintext
1. Cargar productos desde productos.json.
2. Inicializar un carrito vacío.
3. Agregar productos al carrito.
    - Validar stock.
4. Aplicar un descuento.
5. Seleccionar cuotas.
    - Calcular monto por cuota.
```
