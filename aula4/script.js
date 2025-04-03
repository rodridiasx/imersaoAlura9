// Criar uma lista com meus 3 jogadores.

let personagem = ["","",""];

let vilao = ["","",""];

forcaPersonagem = 0;
forcaVilao = 0;

alert("O array personagem contém: " + personagem);
for(let i = 0; i<3; i++){
    escolhaPersonagem = prompt("Digite o nome do seu personagem " + (i+1));
    personagem [i] = escolhaPersonagem;
    // Calcular a força de cada jogador e depois somar para saber a força do time.
    // forcaPersonagem = forcaPersonagem + Math.floor(Math.random()* 10) + 1;
    forcaPersonagem += Math.floor(Math.random()* 10) +1;
}

console.log("Agora, o Array personagem contém: " + personagem);
console.log("Início Vilões: " + vilao);

for(let i=0; i<3; i++){

    indiceAleatorio = Math.floor(Math.random() * 10);

    viloesPossiveis = ["Pikachu","Raichu","Chicorita","Totodile", "Polygon", "Rapidash", "Magikarp", "Onix", "Taurus", "Psyduck"];
    vilao[i] = viloesPossiveis[indiceAleatorio];
    // calcular a força de cada jogador do time do computador.

    forcaVilao += Math.floor(Math.random()* 10) +1;
}

console.log("Vilões: " + vilao);

// Comparar os dois times para saber quem venceu.

if(forcaPersonagem == forcaVilao){

    alert("Vocês empataram com a pontuação " + forcaVilao + ".");
}else {
    if(forcaPersonagem > forcaVilao){
        alert("Você venceu, você fez " + forcaPersonagem + " pontos e a máquina fez " + forcaVilao + ". Parabéns!");
    }else{
        alert("Você perdeu, você fez " + forcaPersonagem + " pontos e a máquina fez " + forcaVilao + " pontos. Tente novamente.")
    }
}
