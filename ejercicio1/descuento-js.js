function calcularPrecioFinal(precio, descuento) {
    if (typeof precio !== 'number' || precio < 0) {
        return 'El precio debe ser mayor a 0';
    }
    if (typeof descuento !== 'number' || descuento < 0 || descuento > 100) {
        return 'El descuento debe estar entre 0 y 100';
    }

    const precioFinal = precio - (precio * (descuento / 100));
    return precioFinal.toFixed(2);
}

console.log(calcularPrecioFinal(100, 20));
