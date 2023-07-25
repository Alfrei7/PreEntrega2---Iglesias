let numeroInicial = parseInt(prompt('Ingresa el número inicial:'));
let numeroFinal = parseInt(prompt('Ingresa el número final:'));

if (parseInt(numeroInicial) && parseInt(numeroFinal)) {
  let numeros = '';

  for (let i = numeroInicial; i <= numeroFinal; i++) {
    numeros += i + ' ';
  }

  alert('Números del ' + numeroInicial + ' al ' + numeroFinal + ': ' + numeros);
} else {
  alert('Por favor, ingresa números válidos.');
}