function agregarProducto(carrito, producto, cantidad) {
    if (typeof cantidad !== 'number' || cantidad < 1) {
        return 'La cantidad debe ser mayor a 0';
    }

    if (producto.stockDisponible < cantidad) {
        return 'No hay suficiente stock'
    }

    const productoEnCarrito = carrito.find(item => item.id === producto.id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += cantidad;
    } else {
        carrito.push({...producto, cantidad});
    }
    return carrito;
}

function verCarrito(carrito) {
    console.log(carrito);
}

function precioTotal(carrito, descuento) {
    let total = 0;
    for (let item of carrito) {
        total += item.precio * item.cantidad;
    }
    if (typeof descuento === 'number' && descuento > 0) {
        total = calcularPrecioFinal(total, descuento);
    }
    return total;

}

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

function simularPagoEnCuotas(monto, numeroCuotas, interesMensual) {
    var cuota = monto / numeroCuotas;

    var interesCompuesto = cuota * (1 + interesMensual / 100) ** numeroCuotas;

    var cuotas = []

    for (var i = 0; i < numeroCuotas; i++) {
        cuotas.push({
            numeroCuota: i + 1,
            monto: interesCompuesto.toFixed(2)
        });
    }

    return cuotas;
}


export {agregarProducto, verCarrito, precioTotal, simularPagoEnCuotas};



