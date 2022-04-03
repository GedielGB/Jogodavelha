var jogador = null;   
 
var jogador1;

var jogador2;

var jog1 = document.getElementById('jog1');

var jog2 = document.getElementById('jog2');

var jogadorSelecionado = document.getElementById('jogador-Selecionado');

var jogadorSelecionado1 = document.getElementById('jogador-Selecionado1');

var vencedorSelecionado = document.getElementById('vencedor-Selecionado');

var quadrados = document.getElementsByClassName('quadrado');

function aba(){


window.open('./inicio.html');


}


if ((jog1.innerHTML && jog2.innerHTML) === ''){

    jogador1 = prompt("Entre com o nome do jogador 1!!");

    jog1.innerHTML = jogador1;
   
    jogador2 = prompt("Entre com o nome do jogador 2!!");
   
    jog2.innerHTML = jogador2;

}

mudarJogador('X');

function escolherQuadrado(id){
   
    var quadrado = document.getElementById(id);  
    if (quadrado.innerHTML !== '-'){
        return;

    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if (jogador === 'X'){
        jogador = '0';
    }
    else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checaVencedor();
    

}

function mudarJogador(valor){

jogador = valor;
if(jogador === 'X'){
   
    jogadorSelecionado1.innerHTML = 'Espere sua vez!'; 
    jogadorSelecionado1.style.color = '#ff0000' ;
    jogadorSelecionado.style.color = '#00ff00' ;
    jogadorSelecionado.innerHTML = 'Sua Vez!';

}else
{
    jogadorSelecionado.innerHTML = 'Espere sua vez!'; 
    jogadorSelecionado.style.color = '#ff0000' ;
    jogadorSelecionado1.style.color = '#00ff00' ;
    jogadorSelecionado1.innerHTML = 'Sua Vez!';
}

}

function checaVencedor(){

var quadrado1 = document.getElementById(1);
var quadrado2 = document.getElementById(2);
var quadrado3 = document.getElementById(3);
var quadrado4 = document.getElementById(4);
var quadrado5 = document.getElementById(5);
var quadrado6 = document.getElementById(6);
var quadrado7 = document.getElementById(7);
var quadrado8 = document.getElementById(8);
var quadrado9 = document.getElementById(9);

if(checaSequencia(quadrado1,quadrado2,quadrado3)){

    mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
    mudarVencedor(quadrado1);
    return;

}
if(checaSequencia(quadrado4,quadrado5,quadrado6)){

    mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
    mudarVencedor(quadrado4);
    return;

}

if(checaSequencia(quadrado7,quadrado8,quadrado9)){

    mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
    mudarVencedor(quadrado7);
    return;

}


if(checaSequencia(quadrado1,quadrado4,quadrado7)){

    mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
    mudarVencedor(quadrado1);
    return;

}


if(checaSequencia(quadrado2,quadrado5,quadrado8)){

    mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
    mudarVencedor(quadrado2);
    return;

}


if(checaSequencia(quadrado3,quadrado6,quadrado9)){

    mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
    mudarVencedor(quadrado3);
    return;

}

if(checaSequencia(quadrado1,quadrado5,quadrado9)){

    mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
    mudarVencedor(quadrado1);
    return;

}

if(checaSequencia(quadrado3,quadrado5,quadrado7)){

    mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
    mudarVencedor(quadrado3);
    return;

}

}

function mudarVencedor(quadrado){

vencedor = quadrado.innerHTML;
if(vencedor === 'X'){
    var mensagem = jogador1;
    alert("Parabéns!!! O vencedor foi o: " + jogador1 +"");
    if (confirm("Deseja jogar novamente?") == true){
        
        reiniciar();

    }else
    {
        window.close();

    }
}else{

    mensagem = jogador2;
    alert("Parabéns!!! O vencedor foi: " + jogador2 +"");
    if (confirm("Deseja jogar novamente?") == true){
        
        reiniciar();

    }else
    {
        window.close();

    }


}


}

function mudaCorQuadrado(quadrado1,quadrado2,quadrado3){

    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';

}

function checaSequencia(quadrado1,quadrado2,quadrado3){

var eigual = false;

if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){

eigual = true;

}
return eigual;
}

function reiniciar(){


for(var i = 1; i <=9; i++){

    var quadrado = document.getElementById(i);
    quadrado.style.background = '#eee';
    quadrado.style.color = '#eee';
    quadrado.innerHTML = '-';

}
mudarJogador('X');
}