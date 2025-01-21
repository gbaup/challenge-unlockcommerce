interface Item {
    nombre: string;
    stockDisponible: number;
    cantidad: number;
}

function checkStock(carrito: Item[]): boolean {
    let stockAvailable: boolean = true;
    carrito.forEach((item: Item) => {
        if (item.cantidad > item.stockDisponible) {
            stockAvailable = false;
            return stockAvailable
        }
    });
    return stockAvailable;
}

const carrito: Item[] = [
    {nombre: 'Remera', stockDisponible: 10, cantidad: 5},
    {nombre: 'Pantalon', stockDisponible: 10, cantidad: 10},
    {nombre: 'Zapatos', stockDisponible: 1, cantidad: 2}
];

console.log(checkStock(carrito));