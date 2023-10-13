const prompt = require("prompt-sync")({ sigint: true });
function calcularMesesTrabajando(diaIngreso, mesIngreso, añoIngreso) {
  var fechaIngreso = new Date(añoIngreso, mesIngreso - 1, diaIngreso);

  var fechaActual = new Date();

  var diferenciaTiempo = fechaActual - fechaIngreso;

  var milisegundosPorMes = 30 * 24 * 60 * 60 * 1000;
  var mesesTrabajando = Math.floor(diferenciaTiempo / milisegundosPorMes);

  return mesesTrabajando;
}
// Solicitar al usuario que ingrese la fecha de ingreso
var diaIngreso = prompt("Ingresa el día de ingreso:");
var mesIngreso =
  prompt("Ingresa el mes de ingreso (1 para enero, 2 para febrero, etc.):");
var añoIngreso = prompt("Ingresa el año de ingreso:");

var resultado = calcularMesesTrabajando(diaIngreso, mesIngreso, añoIngreso);
console.log("Meses trabajando: " + resultado);

module.exports = { calcularMesesTrabajando };
