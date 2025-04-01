let idade = prompt ("Digite sua idade");

if(idade < 18) {
    
    alert("Infelizmente você não pode jogar por ser menor.");
} if(idade >= 18){
    alert("Vamos começar");

let jogador = prompt ("Escolha as opções: 1 para Fogo, 2 para terra ou 3 para água");
let pc = Math.floor(Math.random() * 2) +1;

if (jogador == pc) {

    alert("Ambos escolheram " + pc + ", logo, deu empate." );
}

if(jogador == 1 && pc == 2) {

    alert("Você venceu, você escolheu fogo e o pc escolheu terra. Fogo queima terra.");
}
if(jogador == 1 && pc == 3){

    alert("O pc venceu, você escolheu fogo e o pc escolheu água. Água apaga o fogo.");
} 
if(jogador == 2 && pc == 1){

    alert("O pc venceu, você escolheu terra e o pc escolheu fogo. Fogo queima terra.");
}
if(jogador == 2 && pc == 3){
    
    alert("Você venceu, você escolheu terra e o pc escolheu água. Terra absorve água");
}
if(jogador == 3 && pc == 1){

    alert("Você venceu, você escolheu água e o pc escolheu fogo. Água apaga fogo.");
}
if (jogador == 3 && pc ==2){

    alert("O pc venceu, você escolheu água e o pc escolheu terra. Terra absorve água");
}

alert(pc);
} 