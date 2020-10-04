// Calcula las cuotas basadas en el metodo frances
// cuota = (capital*i) / (1- (i + 1)^ -n)
// i = interes
// n = periodo (en meses)
exports.calcularMetodoFrances = (capital, tasaInteres, plazo) => {
    let cuota = 0;
    let meses = 0;
    let interes = 0;
    let tasaInteresDecimal = tasaInteres / 100;
    const cuotas = [];

// Transformar los años en meses
    plazo = Math.round(plazo * 12);

// Calcular la cuota
    cuota = (capital * tasaInteresDecimal) / (1 - (1 + tasaInteresDecimal) ** -plazo);

    cuota = cuota.toFixed(2);
    console.log(cuota);

    function metodoFrances(){


        cuotas.length = 0;
    
        for (var count = 0; count < plazo; ++count)
        { 
        var intereses = 0;
        var mensualCapital = 0;
        
            
            console.log(" Mes:"  + (count + 1));
            console.log("Cuotas:");
    console.log(cuotas[cuota] = cuota);
    
    console.log("Deuda Pendiente:");
    console.log(cuotas[capital] = capital);
    
    
    
    intereses = capital * tasaInteresDecimal;
    console.log("Interes:");
    console.log(cuotas[intereses] = intereses.toFixed(2));
    mensualCapital = cuota - intereses ;
    console.log("Capital:");
    console.log(cuotas[mensualCapital]= mensualCapital.toFixed(2) );
    
    
    
    capital = capital - mensualCapital
    capital = capital.toFixed(2);
    
    console.log("--------------------------------");
        }
        
        
    return cuotas;
    
      }
    
      metodoFrances();
};

