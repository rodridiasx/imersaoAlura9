let rodada = 1;
while(rodada <=3 ){

    console.log("Rodada: " + rodada);
    let escolhaJogador = prompt("Nível " + rodada + ", escolha entre (1,2 ou 3):");
    let pisoQuebrado = Math.floor(Math.random() * 3) + 1;

    if(escolhaJogador == pisoQuebrado){

        alert("O vidro quebrou.");
        rodada = 1000;
    }else {
        alert("Parabéns, o piso quebrado estava no " + pisoQuebrado + ".");
    }
    rodada = rodada + 1;
}

if (rodada == 4 ) {

    alert("Você venceu, parabéns!");
}
