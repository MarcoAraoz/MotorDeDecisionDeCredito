const prompt = require("prompt-sync")({ sigint: true });

function calculoMotor(tipoNomina, fechaPrimerEmpleo, genero) {
  if (!tipoNomina) {
    tipoNomina = prompt(
      "Ingrese el tipo de nómina (A, B, C, D):"
    ).toUpperCase();
  }
  if (!fechaPrimerEmpleo) {
    function calcularMesesTrabajando(diaIngreso, mesIngreso, añoIngreso) {
      var fechaPrimerEmpleo = new Date(añoIngreso, mesIngreso - 1, diaIngreso);

      var fechaActual = new Date();

      var diferenciaTiempo = fechaActual - fechaPrimerEmpleo;

      var milisegundosPorMes = 30 * 24 * 60 * 60 * 1000;
      var mesesTrabajando = Math.floor(diferenciaTiempo / milisegundosPorMes);

      return mesesTrabajando;
    }

    var diaIngreso = prompt("Día de ingreso (DD):");
    var mesIngreso = prompt(
      "Mes de ingreso (1 para enero, 2 para febrero, etc.):"
    );
    var añoIngreso = prompt("Ingresa el año de ingreso (AAAA):");

    var resultadoMeses = calcularMesesTrabajando(
      diaIngreso,
      mesIngreso,
      añoIngreso
    );
    console.log("Meses trabajando: " + resultadoMeses);
  }
  if (!genero) {
    genero = prompt("Ingrese el género (m o f):");
  }

  var montoMinimo, montoMaximo, recomendacionLinea;

  if (tipoNomina === "A" && genero === "m" && resultadoMeses <= 26) {
    montoMinimo = 100;
    montoMaximo = 4900;
  } else if (tipoNomina === "A" && genero === "m" && resultadoMeses == 27) {
    montoMinimo = 400;
    montoMaximo = 4700;
  } else if (tipoNomina === "A" && genero === "m" && resultadoMeses == 28) {
    montoMinimo = 900;
    montoMaximo = 4600;
  } else if (tipoNomina === "A" && genero === "m" && resultadoMeses == 29) {
    montoMinimo = 100;
    montoMaximo = 4600;
  } else if (tipoNomina === "A" && genero === "m" && resultadoMeses >= 30) {
    montoMinimo = 600;
    montoMaximo = 4500;
  }

  if (tipoNomina === "C" && genero === "m" && resultadoMeses <= 26) {
    montoMinimo = 400;
    montoMaximo = 5000;
  } else if (tipoNomina === "C" && genero === "m" && resultadoMeses == 27) {
    montoMinimo = 200;
    montoMaximo = 4700;
  } else if (tipoNomina === "C" && genero === "m" && resultadoMeses == 28) {
    montoMinimo = 200;
    montoMaximo = 5000;
  } else if (tipoNomina === "C" && genero === "m" && resultadoMeses == 29) {
    montoMinimo = 1000;
    montoMaximo = 4200;
  } else if (tipoNomina === "C" && genero === "m" && resultadoMeses >= 30) {
    montoMinimo = 600;
    montoMaximo = 4600;
  }

  if (tipoNomina === "D" && genero === "m" && resultadoMeses <= 26) {
    montoMinimo = 400;
    montoMaximo = 4400;
  } else if (tipoNomina === "D" && genero === "m" && resultadoMeses == 27) {
    montoMinimo = 300;
    montoMaximo = 4700;
  } else if (tipoNomina === "D" && genero === "m" && resultadoMeses == 28) {
    montoMinimo = 500;
    montoMaximo = 4300;
  } else if (tipoNomina === "D" && genero === "m" && resultadoMeses == 29) {
    montoMinimo = 900;
    montoMaximo = 4900;
  } else if (tipoNomina === "D" && genero === "m" && resultadoMeses >= 30) {
    montoMinimo = 1000;
    montoMaximo = 4300;
  }

  if (tipoNomina === "A" && genero === "f" && resultadoMeses <= 24) {
    montoMinimo = 800;
    montoMaximo = 4000;
  } else if (tipoNomina === "A" && genero === "f" && resultadoMeses == 25) {
    montoMinimo = 800;
    montoMaximo = 4200;
  } else if (tipoNomina === "A" && genero === "f" && resultadoMeses == 26) {
    montoMinimo = 800;
    montoMaximo = 4100;
  } else if (tipoNomina === "A" && genero === "f" && resultadoMeses == 27) {
    montoMinimo = 600;
    montoMaximo = 4200;
  } else if (tipoNomina === "A" && genero === "f" && resultadoMeses >= 28) {
    montoMinimo = 200;
    montoMaximo = 4500;
  }

  if (tipoNomina === "B" && genero === "f" && resultadoMeses <= 24) {
    montoMinimo = 800;
    montoMaximo = 4700;
  } else if (tipoNomina === "B" && genero === "f" && resultadoMeses == 25) {
    montoMinimo = 700;
    montoMaximo = 4200;
  } else if (tipoNomina === "B" && genero === "f" && resultadoMeses == 26) {
    montoMinimo = 100;
    montoMaximo = 4500;
  } else if (tipoNomina === "B" && genero === "f" && resultadoMeses == 27) {
    montoMinimo = 600;
    montoMaximo = 4300;
  } else if (tipoNomina === "B" && genero === "f" && resultadoMeses >= 28) {
    montoMinimo = 700;
    montoMaximo = 4400;
  }

  if (genero === "m" || "f") {
    p1 = montoMinimo + Math.sqrt(montoMaximo - montoMinimo);
    p2 = montoMinimo + 0.0175 * (montoMaximo - montoMinimo);
    recomendacionLinea = Math.max(p1, p2);
  }

  var resultado = {
    Tipo_Nomina: tipoNomina,
    Fecha_Primer_Empleo: `${diaIngreso}-${mesIngreso}-${añoIngreso}`,
    Meses_Laborados: resultadoMeses,
    Genero: genero,
    montoMinimo: montoMinimo,
    montoMaximo: montoMaximo,
    Linea_Credito_Optima: recomendacionLinea,
  };

  return resultado;
}

var resultado = calculoMotor();
console.table(resultado);
