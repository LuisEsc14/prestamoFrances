// Calcula las cuotas basadas en el metodo frances
// cuota = (capital*i) / (1- (i + 1)^ -n)
// i = interes
// n = periodo (en meses)
exports.calcularMetodoFrances = (capital, tasaInteres, plazo) => {
    let cuota = 0;
    let mes = 0;
    let interes = 0;
    let tasaInteresDecimal = tasaInteres / 100;
    const cuotas = [];
    let capitalAmortizado = 0;

// Transformar los años en meses
    plazo = Math.round(plazo * 12);

// Calcular la cuota
    cuota = (capital * tasaInteresDecimal) / (1 - (1 + tasaInteresDecimal) ** -plazo);
    cuota = cuota.toFixed(2);

    while (mes != plazo) {
        // Obtener el interes por periodo
        interes = (capital * tasaInteresDecimal);
        interes = interes.toFixed(2);

        //Obtener capital que se amortiza en la cuota
        capitalAmortizado = cuota - interes;
        capitalAmortizado = capitalAmortizado.toFixed(2);

        //Actualizar el mes(periodo)
        mes++;

        //Actualizar la deuda
        capital -= capitalAmortizado;
        capital = capital.toFixed(2);

        // TODO: Verificar los calculos con valores decimales
        //Almacenar los valores en el arreglo
        cuotas.push({
            mes,
            capitalAmortizado,
            interes,
            cuota,
            capital,
        });
    }
    
    return cuotas;
};

