const prompt = require("prompt-sync")({ sigint: true });
// const { calcularMesesTrabajando, } = require('./mesesTrabajando')

function calculoMotor(tipoNomina, fechaPrimerEmpleo, genero) {
  if (!tipoNomina) {
    tipoNomina = prompt("Ingrese el tipo de nómina (A, B, C, D):");
  }
  if (!fechaPrimerEmpleo) {
    var fechaStr = prompt("Ingrese la fecha de primer empleo (YYYY-MM-DD):");
    fechaPrimerEmpleo = new Date(fechaStr);
  }
  if (!genero) {
    genero = prompt("Ingrese el género (m o f):");
  }

  var montoMinimo, montoMaximo, recomendacionLinea;

  if (tipoNomina === "A") {
    montoMinimo = 5000;
    montoMaximo = 10000;
  } else if (tipoNomina === "B") {
    montoMinimo = 3000;
    montoMaximo = 7000;
  } else if (tipoNomina === "C") {
    montoMinimo = 2000;
    montoMaximo = 5000;
  } else if (tipoNomina === "D") {
    montoMinimo = 1000;
    montoMaximo = 3000;
  }

  if (genero === "m") {
    recomendacionLinea = "Línea de crédito óptima para hombres";
  } else if (genero === "f") {
    recomendacionLinea = "Línea de crédito óptima para mujeres";
  } else {
    recomendacionLinea = "Línea de crédito no determinada";
  }

  var resultado = {
    montoMinimo: montoMinimo,
    montoMaximo: montoMaximo,
    recomendacionLinea: recomendacionLinea,
  };

  return resultado;
}

// Ejemplo de uso
//   var tipoNomina = "B";
//   var fechaPrimerEmpleo = new Date("2020-03-15");
//   var genero = "m";

var resultado = calculoMotor();
console.log(resultado);
