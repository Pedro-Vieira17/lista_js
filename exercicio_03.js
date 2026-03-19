function balancoAnual () {

    let ganho_anual = 0;
    let gasto_anual = 0; 

    for (let i = 1; i <= 12; i++) {

        let ganho = Number(prompt("Ganho do mês" + i));
        let gasto = Number(prompt("Gasto do mês" + i));
        ganho_anual += ganho;
        gasto_anual += gasto;
    }

    console.log(ganho_anual);
    console.log(gasto_anual);

    let saldo = ganho_anual - gasto_anual;

    alert("Ganho anual: "+ ganho_anual);
    alert("Gasto anual: "+ gasto_anual);
    alert("Saldo anual: "+ saldo);

    if (saldo > 0){
        alert("Lucro!");
    } else{
        alert("Prejuizo!");
    }
}

