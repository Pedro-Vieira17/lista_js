function DuasVariaveis() {

    let numero_1 = parseInt(prompt("Digite um número inteiro:"));
    let numero_2 = parseInt(prompt("Digite outro número inteiro:"));

    let diferenca = numero_1 - numero_2;
    let dobro_primeira = numero_1 * 2;
    let triplo_segunda = numero_2 * 3;
    let letra_b = dobro_primeira + triplo_segunda;
    let multiplicacao = numero_1 * numero_2;


    alert(
        "a) Diferença: " + diferenca + "\n" +
        "b) Dobro da primeira + triplo da segunda: " + letra_b + "\n" +
        "c) Multiplicação: " + multiplicacao
    );
}