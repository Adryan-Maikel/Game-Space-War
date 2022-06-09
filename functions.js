var diryJ, dirxJ, jog, velJ, pjx, pjy;
var tamTelaW, tamTelaH;
var jogo;
var frame;

function teclaDw(){
    var tecla=event.keyCode;
    if(tecla==38){//cima
        diryJ=-1;
    }else if(tecla==40){//baixo
        diryJ=1;
    }
    if(tecla==37){//esquerda
        dirxJ=-1;
    }else if(tecla==39){//direita
        dirxJ=1;
    }
    if(tecla==32){//espaço

    }
}
function teclaUp(){
    var tecla=event.keyCode;
    if((tecla==38)||(tecla==40)){
        diryJ=0;
    }
    if((tecla==37)||(tecla==39)){
        dirxJ=0;
    }
}

function controlaJogador(){
    pjy+=
}

function gameLoop(){
    if(jogo){
        //funções de controle
        
    }
    frame=requestAnimationFrame(gameLoop);
}

function inicia(){
    jogo = true;

    //inicialização da tela
    tamTelaH=window.innerHeight;
    tamTelaW=window.innerWidth;

    //inicialização do jogador
    dirxJ=diryJ=0
    pjx=tamTelaW/2;
    pjy=tamTelaH/2;
    velJ=5;
    jog=document.getElementById("navJog");
    jog.style.top=pjy+"px";
    jog.style.left=pjx+"px";
}

window.addEventListener("load",inicia);
document.addEventListener("keydown",teclaDw);
document.addEventListener("keydown",teclaUp);