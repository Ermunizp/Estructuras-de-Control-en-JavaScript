// Obtener el número ingresado y convertirlo a número
let numeroMultiplicar = Number(window.numeroIngresado);

// Validación de número ingresado (isNaN) y uso de if anidados
if (isNaN(numeroMultiplicar)) {
  console.log("Entrada no válida. Por favor, ingrese un número.");
} else {
  if (numeroMultiplicar <= 0) {
    console.log("Ingrese un número mayor que cero.");
  } else {
    console.log(`Tabla de multiplicar del ${numeroMultiplicar}:`);
    for (let i = 1; i <= 12; i++) {
      console.log(`${numeroMultiplicar} x ${i} = ${numeroMultiplicar * i}`);
    }
  }
}
