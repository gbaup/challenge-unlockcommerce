import {agregarProducto, verCarrito, precioTotal, simularPagoEnCuotas} from './carrito.js';
import productos from './productos.json' assert {type: 'json'};

const miCarrito = [];

// Simulación de agregar un producto al carrito. Los productos van a ser obtenidos del json simulando información de una base de datos.
const producto = productos[0];
agregarProducto(miCarrito, producto, 2);

// Simulación de agregar un producto sin stock al carrito
const productoSinStock = productos[9];
agregarProducto(miCarrito, productoSinStock, 5);

const producto2 = productos[4];
agregarProducto(miCarrito, producto2, 1);

// Ver el carrito después de agregar el primer producto y no el segundo
verCarrito(miCarrito);

// Ver el precio total del carrito. La función precioTotal recibe un carrito y un descuento. Si no se pasa descuento, el precio total es el precio de los productos en el carrito.
console.log(precioTotal(miCarrito, 10));

// Simular el pago en cuotas
console.log(simularPagoEnCuotas(precioTotal(miCarrito, 10), 6, 1));