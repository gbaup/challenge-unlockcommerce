function pagoEnCuotas(monto, numeroCuotas, interesMensual) {
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

console.log(pagoEnCuotas(1000, 10, 1));