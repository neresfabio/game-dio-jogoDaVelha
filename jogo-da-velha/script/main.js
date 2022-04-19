let jogador,vencedor = null;
let jogadorSelecionado = document.getElementById('jogador-selecionado');
let vencedorSelecionado = document.getElementById('vencedor');
let box = document.getElementsByClassName('box');

/*Jogador 'X' é o primeiro a jogar*/
mudarJogador('X');

/*Identifica caixa selecionada pelo jogador*/
function escolherBox(id){

    /*Alguem ganhou*/
    if(vencedor !== null){
        return
    }

   var box = document.getElementById(id);

    /* Impedindo jogador escolher um campo já marcado*/
    if(box.innerHTML !== '+'){
        return
    }

   box.innerHTML = jogador;
   box.style.color = 'rgb(44, 228, 228)';

   if(jogador === 'X'){
        jogador = 'O';
   }else{
        jogador = 'X';
   }

   mudarJogador(jogador);
   checaSeGanhou();
}

/* Informa qual é o jogador da vez.*/
function mudarJogador(value){
    jogador = value;
    jogadorSelecionado.innerHTML = jogador;
}

/* Checando se Há ganhador*/

function checaSeGanhou(value){
    var box1 = document.getElementById(1);
    var box2 = document.getElementById(2);
    var box3 = document.getElementById(3);
    var box4 = document.getElementById(4);
    var box5 = document.getElementById(5);
    var box6 = document.getElementById(6);
    var box7 = document.getElementById(7);
    var box8 = document.getElementById(8);
    var box9 = document.getElementById(9);

    /*Linha*/
    if(ganhou(box1,box2,box3)){
        pintaBox(box1,box2,box3);
        mostraVencedor(box1);
        return
    }
    if(ganhou(box4,box5,box6)){
        pintaBox(box4,box5,box6);
        mostraVencedor(box4);
        return
    }
    if(ganhou(box7,box8,box9)){
        pintaBox(box7,box8,box9);
        mostraVencedor(box7);
        return
    }
    /*Coluna*/
    if(ganhou(box1,box4,box7)){
        pintaBox(box1,box4,box7);
        mostraVencedor(box1);
        return
    }
    if(ganhou(box2,box5,box8)){
        pintaBox(box2,box5,box8);
        mostraVencedor(box2);
        return
    }
    if(ganhou(box3,box6,box9)){
        pintaBox(box3,box6,box9);
        mostraVencedor(box3);
        return
    }
    /*Diagonal*/
    if(ganhou(box1,box5,box9)){
        pintaBox(box1,box5,box9);
        mostraVencedor(box1);
        return
    }
    if(ganhou(box3,box5,box7)){
        pintaBox(box3,box5,box7);
        mostraVencedor(box3);
    }

}

/* Mostra vencedor */
function mostraVencedor(box){
    vencedor = box.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

/* Pinta box*/
function pintaBox(box1,box2,box3){
    box1.style.background = '#026b6bad';
    box2.style.background = '#026b6bad';
    box3.style.background = '#026b6bad';
}

/*Alguem ganhou*/
function ganhou(box1,box2,box3){
    var equals = false;

    if(box1.innerHTML !== '+' && box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML){
        equals = true;
    }

    return equals;
}

/*Reiciar Jogo*/
function reiniciaJogo(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';
    jogadorSelecionado.innerHTML = 'X';

    for(var i = 1; i <= 9; i++){
        var box = document.getElementById(i);

        box.style.background = '#00ffff1c';
        box.style.color = 'aqua';
        box.innerHTML = '+';
    }
}