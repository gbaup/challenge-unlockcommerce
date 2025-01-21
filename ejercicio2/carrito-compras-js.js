function checkStock(carrito) {
    let stockAvailable = true;
    for (let item of carrito) {
        if (item.stockDisponible < item.cantidad) {
            stockAvailable = false;
            break;
        }
    }
    return stockAvailable;
}

console.log(checkStock([
    {nombre: 'Remera', stockDisponible: 10, cantidad: 5},
    {nombre: 'Pantalon', stockDisponible: 10, cantidad: 10},
    {nombre: 'Zapatos', stockDisponible: 1, cantidad: 2}
]));