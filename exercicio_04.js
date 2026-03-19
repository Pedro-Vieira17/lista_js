function ordenacaoValores() {

    let numeros = [];

    for (let i = 1; i <= 4; i++) {
     numeros.push(Number(prompt("Digite um número: ")));
    }

  numeros.sort((a,b) => b - a);

alert("Ordem decrescente: " + numeros);
  

}
