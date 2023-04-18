

//sons do game
var raquetada;
var raquetada2;
var ponto;  
var trilha;  

function preLoad(){
  soundFormats("mp3");
  trilha = loadSound("trilha.mp3");
 
  
}


var xBolinha = 300;
var yBolinha = 200;
var diametro = 20;
var raio = diametro / 2;

//velocidade nois bolinha(raquete)
var velocidadeXBolinha = 6;
var velocidadeYBolinha = 6;
//velocidade maquina raquete
var velocidadeYMaquina;

//chance de errar
var chanceDeErrar = 0;

//nois
var xRaquete = 5;
var yRaquete = 150;
var raqueteComprimento = 10;
var raqueteAltura = 100;

//Maquina
var xRaqueteMaquina = 585;
var yRaqueteMaquina = 150;
var raqueteComprimento = 10;
var raqueteAltura = 100;



var colidiu = false;

//placar do game
var meusPontos = 0;
var pontosMaquina = 0;






function preload(){
  trilha = loadSound("trilha.mp3");
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada2 = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  
  
  mostraRaquete(xRaquete, yRaquete);
   movimentaMinhaRaquete();
  mostraRaquete(xRaqueteMaquina, yRaqueteMaquina);
   movimentaRaqueteOponente();
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteMaquina, yRaqueteMaquina);
  placar();
  marcaPonto();
  
}

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro)
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1; 
    }
   if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}

function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura);
  
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW))
    yRaquete -= 10;
  if(keyIsDown(DOWN_ARROW))
    yRaquete += 10;
}



function verificaColisaoRaquete(x,y){
 colidiu = collideRectCircle(x, y,raqueteComprimento,raqueteAltura,
xBolinha,yBolinha,raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente(){
  
  velocidadeYMaquina =  yBolinha - yRaqueteMaquina - raqueteComprimento /2 -30;
  yRaqueteMaquina += velocidadeYMaquina
  calculaChanceDeErrar();
}


function placar(){
    stroke(255);
    textAlign(CENTER);
    textSize(20);
    fill(255,140,0)
    rect(150, 10, 40, 20);
    fill(255)
    text(meusPontos, 170, 26);
    fill(255,140,0)
    rect(450, 10, 40, 20);
    fill(255)
    text(pontosMaquina, 470, 26);

}

function marcaPonto(){
  if(xBolinha > 590 ){
      meusPontos += 1;
    ponto.play();
  }
    if(xBolinha < 10){
         pontosMaquina += 1;
      ponto.play();
    }
}
function calculaChanceDeErrar() {
  if (pontosMaquina >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}


function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}
