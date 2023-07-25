
  let precioOriginal = prompt("Ingrese el precio original:");
  let porcentajeDescuento =prompt("Ingrese el porcentaje de descuento:");

  
  if (esNumeroValido(precioOriginal) && esNumeroValido(porcentajeDescuento)) {
      precioOriginal = parseInt(precioOriginal);
      porcentajeDescuento = parseInt(porcentajeDescuento);

      if (precioOriginal >= 0 && porcentajeDescuento >= 0 && porcentajeDescuento <= 100) {
         
          let descuento = (precioOriginal * porcentajeDescuento) / 100;

          
          let precioConDescuento = precioOriginal - descuento;

          
          alert("Precio original: $ " + precioOriginal + ". " +
              " Descuento: $ " + descuento + ". "+
              " Precio con descuento: $ " + precioConDescuento + ". ");
      } else {
          alert("Por favor, ingrese valores válidos mayores o iguales a cero.");
      }
  } else {
      alert("Por favor, ingrese valores numéricos válidos.");
  }


function esNumeroValido(valor) {
  return parseInt(valor) && (parseInt(valor));
}