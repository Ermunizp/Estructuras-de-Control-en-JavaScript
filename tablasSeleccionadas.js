// Obtener la selección del usuario
let tipoSeleccionado = window.seleccionTablas;

// Validar la entrada con IF anidados
if (tipoSeleccionado === null) {
  console.log("No se ingresó ninguna opción.");
} else {
  tipoSeleccionado = tipoSeleccionado.toLowerCase();

  if (tipoSeleccionado !== "pares" && tipoSeleccionado !== "impares") {
    console.log("Opción no válida. Debes escribir 'pares' o 'impares'.");
  } else {
    console.log(`Mostrando tablas de multiplicar de números ${tipoSeleccionado}:`);

    // Determinar si se imprimen pares o impares
    for (let i = 1; i <= 10; i++) {
      if ((tipoSeleccionado === "pares" && i % 2 === 0) || (tipoSeleccionado === "impares" && i % 2 !== 0)) {
        console.log(`\nTabla del ${i}:`);
        for (let j = 1; j <= 10; j++) {
          console.log(`${i} x ${j} = ${i * j}`);
        }
      }
    }
  }
}
