
let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));

let operacion = prompt("Ingresa la operación (+, -, *, /):");

let resultado;

switch (operacion) {
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        resultado = num1 / num2;
        break;
    default:
        alert("Operación inválida");
}

if (resultado !== undefined) {
    alert("El resultado es: " + resultado);
}