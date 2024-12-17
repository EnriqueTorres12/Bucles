
let numeroStr = prompt("Introduce un número:");

let numero = parseInt(numeroStr);

if (!isNaN(numero)) {
    console.log("Números a partir de " + numero + ":");
    for (let i = 0; i < 10; i++) { 
        document.write(numero + i + '<br>'); 
    }
} else {
    alert("Por favor, introduce un número válido.");
}
