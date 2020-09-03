var gamestate;
var heading;
var startbutton;
var Gameover;

var game;
var scrollflag=0;
var background;
var sidegirlimg;
var scrollimg;
var coronaimg;
var coronagroup,watergroup,sanitizersgroup;
var sanitizerImage;
var animalsImage;
var bellsound;
var speechbubble1,speechbubble2,speechbubble3,waterimg;
var watercollected=0, sanitizerscollected=0,waterflag=0,sanitizersflag=0;

function preload(){
   backgroundimg = loadImage("Images/background.jpg")
   sidegirlimg=loadImage("Images/girl1.png")
   scrollimg=loadImage("Images/scroll1.jpg")
   coronaimg=loadImage("Images/corona1.png")
   waterimg=loadImage("Images/water1.png")
   sanitizersImage=loadImage("Images/sanitizer.png")
   animalsImage=loadImage("Images/animal.png")
   bellsound=loadSound("sound/bell-ring-01.mp3")
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    gamestate=1;
    game = new Game();
    player= new Player();
    Gameover=createElement("h1");
    


    coronagroup=createGroup();
    watergroup=createGroup();
    sanitizersgroup = createGroup();
    animalsgroup = createGroup();
}

function draw(){
 if(gamestate===1){
    game.displayfirstpage();
}
else if(gamestate===2){
  background(backgroundimg);
  console.log("page2")
  game.displaysecondpage();

}
else if(gamestate===3){
  console.log("page3")
//  background("white")
  game.displaythirdpage();
 
  drawSprites();
 // player.girl.debug=true;
  fill("blue");
  textSize(32);
  text(watercollected+"/3",player.girl.x+1200,displayHeight-60);
  image(waterimg,player.girl.x+1170,displayHeight-100,25,50)

  fill("Red");
textSize(32);
text(sanitizerscollected+"/3",player.girl.x+900,displayHeight-60);
image(sanitizersImage,player.girl.x+870,displayHeight-100,25,50)

}

else if(gamestate==="end"){
 game.displayfirstpage();
  Gameover.position((displayWidth/2)-150,displayHeight/8);
 Gameover.style('font-size', '72px');
Gameover.style('color', '#ff0000');
Gameover.html("GAME OVER ");



}
if(gamestate==="win"){
  game.displayfirstpage();
  Gameover.position((displayWidth/2)-150,displayHeight/8);
 Gameover.style('font-size', '72px');
Gameover.style('color', '#ff0000');
Gameover.html("GAME WIN ");

}
}


  