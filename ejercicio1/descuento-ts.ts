interface ProductoDescuento {
    precio: number;
    descuento: number;
}

function calcularPrecioFinal(producto: ProductoDescuento): number {
    if (producto.precio <= 0) {
        throw new Error('El precio debe ser mayor a 0');
    }
    if (producto.descuento < 0 || producto.descuento > 100) {
        throw new Error('El descuento debe estar entre 0 y 100');
    }
    return producto.precio - producto.precio * producto.descuento / 100;
}

const producto: ProductoDescuento = {
    precio: 255,
    descuento: 20
};

console.log(calcularPrecioFinal(producto));