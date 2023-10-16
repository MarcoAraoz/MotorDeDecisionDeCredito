// import { calcularMesesTrabajando } from './mesesTrabajando'
const prompt = require("prompt-sync")({ sigint: true });

function calculoMotor(tipoNomina, fechaPrimerEmpleo, genero) {
  if (!tipoNomina) {
    tipoNomina = prompt("Ingrese el tipo de nómina (A, B, C, D):");
  }
  if (!fechaPrimerEmpleo) {
    // calcularMesesTrabajando()
    function calcularMesesTrabajando(diaIngreso, mesIngreso, añoIngreso) {
      var fechaIngreso = new Date(añoIngreso, mesIngreso - 1, diaIngreso);

      var fechaActual = new Date();

      var diferenciaTiempo = fechaActual - fechaIngreso;

      var milisegundosPorMes = 30 * 24 * 60 * 60 * 1000;
      var mesesTrabajando = Math.floor(diferenciaTiempo / milisegundosPorMes);

      return mesesTrabajando;
    }
    // Solicitar al usuario que ingrese la fecha de ingreso
    var diaIngreso = prompt("Día de ingreso (DD):");
    var mesIngreso = prompt(
      "Mes de ingreso (1 para enero, 2 para febrero, etc.):"
    );
    var añoIngreso = prompt("Ingresa el año de ingreso (AAAA):");

    var resultado = calcularMesesTrabajando(diaIngreso, mesIngreso, añoIngreso);
    console.log("Meses trabajando: " + resultado);

    // var fechaStr = prompt("Ingrese la fecha de primer empleo (YYYY-MM-DD):");
    // fechaPrimerEmpleo = new Date(fechaStr);
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
    Tipo_Nomina: tipoNomina,
    Fecha_Primer_Empleo: `${diaIngreso}-${mesIngreso}-${añoIngreso}`,
    Meses_Laborados: resultado,
    Genero: genero,
    montoMinimo: montoMinimo,
    montoMaximo: montoMaximo,
    recomendacionLinea: recomendacionLinea,
  };

  return resultado;
}

var resultado = calculoMotor();
console.table(resultado);
