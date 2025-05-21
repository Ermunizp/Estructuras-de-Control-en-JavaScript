// Obtener el número ingresado y convertirlo a número
let numero = Number(window.numeroIngresado);

// Validación usando if anidados
if (isNaN(numero)) {
  console.log("Entrada no válida. Por favor, ingrese un número.");
} else {
  if (numero <= 0) {
    console.log("Ingrese un número mayor que cero.");
  } else {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 12; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
}
