function filtrarPorPrecio(productos, precioMax, precioMin) {
    return productos.filter(producto => producto.precio <= precioMax && producto.precio >= precioMin);
}

const productos = [
    {nombre: 'Remera', precio: 500},
    {nombre: 'Pantalon', precio: 1000},
    {nombre: 'Zapatos', precio: 2000},
    {nombre: 'Campera', precio: 3000}
]

console.log(filtrarPorPrecio(productos, 2500, 800))
