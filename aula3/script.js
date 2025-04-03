let ganhou = 0; // Se for 1, perdeu, se for 0, ganhou.

for(let rodada = 1; rodada <= 3; rodada++){

    let escolhaJogador = prompt("Nível " + rodada + ", escolha entre (1,2 ou 3):");
    let pisoQuebrado = Math.floor(Math.random() * 3) + 1;

    if(escolhaJogador == pisoQuebrado){

        alert("O vidro quebrou.");
        rodada = 1000;
        ganhou = 1;
    }else {
        alert("Parabéns, o piso quebrado estava no " + pisoQuebrado + ".");
    }
}
if (ganhou == 0) {

    alert("Você venceu, parabéns!");
}
