
    let numero = parseInt(prompt("Digite qual tabuada gostaria de saber: "));

    while (numero < 1 || numero > 10) {    
    }

    document.write("<h3>Tabuada do " + numero + ":</h3>");
    for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    document.write(numero + " x " + i + "= " + resultado + "<br>");
}