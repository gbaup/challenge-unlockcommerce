interface Producto {
    nombre: string;
    precio: number;
}

function filtrarPorPrecio(productos: Producto[], precioMaximo: number, precioMinimo: number): Producto[] {
    return productos.filter((producto: Producto) => producto.precio <= precioMaximo);
}

const productos: Producto[] = [
    {nombre: 'Remera', precio: 500},
    {nombre: 'Pantalon', precio: 1000},
    {nombre: 'Zapatos', precio: 2000},
    {nombre: 'Campera', precio: 3000}
]

console.log(filtrarPorPrecio(productos, 1500, 500));