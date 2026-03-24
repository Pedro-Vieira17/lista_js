function ParImpar() {

    let numero = parseInt(prompt("Digite um número inteiro:"));
    let resultado;

    if (numero % 2 === 0) {

        resultado = numero + 1;
        alert("Valor final ÍMPAR : " + resultado);

    } else {

        resultado = numero + 1;
        alert("Valor final PAR : " + resultado);
    }

}