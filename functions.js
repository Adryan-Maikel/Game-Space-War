var diryJ, dirxJ, jog, velJ, pjx, pjy;
var velT;
var tamTelaW, tamTelaH;
var jogo;
var frames;
var contBombs, painelContBombs, timeCreatBomb;
var bombsTotal, velB;
var lifePlanet;

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
		atirar(pjx+17,pjy);
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

function creatBomb(){
    if(jogo){
        var y=0;
        var x=Math.random()*tamTelaW;
        var bomb=document.createElement("div");
        var att1=document.createAttribute("class");
        var att2=document.createAttribute("style");
        att1.value="bomb";
        att2.value="top:"+y+"px;left:"+x+"px";
        bomb.setAttributeNode(att1);
        bomb.setAttributeNode(att2);
        document.body.appendChild(bomb);
        contBombs--;
    }
}

function controleBombs(){
    bombsTotal=document.getElementsByClassName("bomb");
    var tam=bombsTotal.length;
    for(var i=0;i<tam;i++){
        if(bombsTotal[i]){
            var pi=bombsTotal[i].offsetTop;
            pi+=velB;
            bombsTotal[i].style.top=pi+"px";
            if(pi>tamTelaH){
                lifePlanet-=10;
                bombsTotal[i].remove();
            }
        }
    }
}

function atirar(x,y){
	var t=document.createElement("div");
	var att1=document.createAttribute("class");
	var att2=document.createAttribute("style");
	att1.value="tiroJog";
	att2.value="top:"+y+"px;left:"+x+"px";
	t.setAttributeNode(att1);
	t.setAttributeNode(att2);
	document.body.appendChild(t);
}

function controleTiros(){
	var tiros=document.getElementsByClassName("tiroJog");
	var tam=tiros.length;
	for(var i=0;i<tam;i++){
		if(tiros[i]){
			var pt=tiros[i].offsetTop;
			pt-=velT;
			tiros[i].style.top=pt+"px";
            colisaoTiroBomba(tiros[i]);
			if(pt<0){
				tiros[i].remove();
			}
		}
	}
}

function colisaoTiroBomba(tiro){
    var tam=bombsTotal.length;
    for(var i=0;i<tam;i++){
        if(bombsTotal[i]){
            if(((tiro.offsetTop<=(bombsTotal[i].offsetTop+40))
            &&
            ((tiro.offsetTop+6)>=(bombsTotal[i].offsetTop)))
            &&
            ((tiro.offsetLeft<=(bombsTotal[i].offsetLeft+24))
            &&
            ((tiro.offsetLeft+6)>=(bombsTotal[i].offsetLeft)))){
                bombsTotal[i].remove();
                tiro.remove();
            }
        }
    }
}

function controleJogador(){
    pjy+=diryJ*velJ;
    pjx+=dirxJ*velJ;
    jog.style.top=pjy+"px";
    jog.style.left=pjx+"px";
    
}

function gameLoop(){
    if(jogo){
        //funções de controle
        controleJogador();
        controleTiros();
        controleBombs();
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
    velJ=velT=5;
    jog=document.getElementById("navJog");
    jog.style.top=pjy+"px";
    jog.style.left=pjx+"px";

    //inicialização das bombas
    clearInterval(timeCreatBomb);
    contBombs=150;
    velB=3;
    timeCreatBomb=setInterval(creatBomb,1700);

    //inicialização do planeta
    lifePlanet=300;

    gameLoop();
}

window.addEventListener("load", inicia);
document.addEventListener("keydown", teclaDw);
document.addEventListener("keyup", teclaUp);