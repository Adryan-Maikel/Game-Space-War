var diryJ, dirxJ, jog, velJ, pjx, pjy;
var tamTelaW, tamTelaH;
var jogo;
var frames;

function teclaDw(){
	var tecla=event.keyCode;
	if(tecla==38){//Cima
		diryJ=-1;
	}else if(tecla==40){//Baixo
		diryJ=1;
	}
	if(tecla==37){//Esquerda
		dirxJ=-1;
	}else if(tecla==39){//Direita
		dirxJ=1;
	}
	if(tecla==32){//Espaço / Tiro
		//TIRO
	}
}
function teclaUp(){
	var tecla=event.keyCode;
	if((tecla==38)||(tecla==40)){
		diryJ=0;
	}
	if((tecla==37)||(tecla==39)){//Esquerda
		dirxJ=0;
	}
}

function controlaJogador(){
    pjy+=diryJ*velJ;
    pjx+=dirxJ*velJ;
    jog.style.top=pjy+"px";
    jog.style.left=pjx+"px";
    
}

function gameLoop(){
    if(jogo){
        //funções de controle
        controlaJogador();
    }
    frames=requestAnimationFrame(gameLoop);
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

    gameLoop();
}

window.addEventListener("load", inicia);
document.addEventListener("keydown", teclaDw);
document.addEventListener("keyup", teclaUp);