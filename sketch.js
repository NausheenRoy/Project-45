var database;

var gameState =0;
var count = 0;
var allPlayers;

var distance = 0;

var player, form,game;
var player1,player2,player3,player4,player6;
var players;
var stone1image,stone2image,stone3image,stone4image,stone5image,stone6image,stone7image;
var backgroundimg;
var ballimage,ball;



function preload(){
 ballimage = loadImage("images/ball.jpg");
 stone1image = loadImage("images/1.jpg");
 stone2image = loadImage("images/2.jpg");
 stone3image = loadImage("images/3.jpg");
 stone4image = loadImage("images/4.jpg");
 stone5image = loadImage("images/2.jpg");
 stone6image = loadImage("images/2.jpg");
 stone7image = loadImage("images/1.jpg");
 backgroundimg = loadImage("images/openground.jpg");
}
function setup() {
  createCanvas(1000, 900);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  stone1 = createSprite(500,700,20,20);
  stone1.addImage(stone1image);
  stone2 = createSprite(500,650,20,20);
  stone2.addImage(stone2image);
  stone3 = createSprite(500,600,20,20);
  stone3.addImage(stone3image);
  stone4 = createSprite(500,550,20,20);
  stone4.addImage(stone4image);
  stone5 = createSprite(500,500,20,20);
  stone5.addImage(stone5image);
  stone6 = createSprite(500,450,20,20);
  stone6.addImage(stone6image);
  stone7 = createSprite(500,400,20,20);
  stone7.addImage(stone7image);

  player1 = createSprite(950,650,20,20);
  player2 = createSprite(950,600,20,20);
  player3 = createSprite(950,550,20,20);
  player4 = createSprite(100,250,20,20);
  player5 = createSprite(100,200,20,20);
  player6 = createSprite(100,150,20,20);

  //ball = createSprite(400,500,0.5,0.5);
  //ball.addImage(ballimage);

  
}

function draw() {
  background(backgroundimg);
  
   if (count === 6) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
         
     game.end();

   }

  // stone1.display();
   //stone2.display();
   //stone3.display();
   //stone4.display();
   //stone5.display();
   //stone6.display();
   //stone7.display();
   //ball.display();
   player1.display();
   player2.display();
   player3.display();
   player4.display();
   player5.display();
   player6.display();
}