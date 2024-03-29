var GameState = "wait"
var wall1,wall2,wall3,wall4,Player;
var score = 0
function preload(){
  splashscreenbg = loadImage("splashscreen.gif");
    player_img = loadImage("zombieimage.png");
    
    Game_Screen = loadImage('bg2.jpg')

    //upload images of enemy, coin, trophy
    
}
function setup(){
    createCanvas(600,600)
    Player = createSprite(300,300)
    Player.visible = false;

    playbutton = createImg("playgrey.png");
    playbutton.position(200, 300);
    playbutton.size(100,100);
    infobutton = createImg("infon.png");
    infobutton.position(300, 300);
    infobutton.size(100,100);
    infobutton.hide()
    playbutton.hide()

    


//create boundary walls
wall1 = createSprite(30,300,10,550)
wall1.shapeColor = "orange";
wall2 = createSprite(300,25,550,10)
wall2.shapeColor = "blue";
wall3 = createSprite(300,580,550,10)
wall3.shapeColor = "pink";
wall4 = createSprite(570,300,10,550)
wall4.shapeColor = "tan";

//create player 
Player = createSprite(280,200)
Player.addImage(player_img);
Player.scale = 0.2
 

//create enemies


//create maze

wall5 = createSprite(300,300,160,10)
wall5.shapeColor = "black";
wall6 = createSprite(300,350,160,10)
wall6.shapeColor = "black";
wall7 = createSprite(255,250,10,100)
wall7.shapeColor = "black";
wall8 = createSprite(255,400,10,100)
wall8.shapeColor = "black";
wall9 = createSprite(345,250,10,100)
wall9.shapeColor = "black";
wall10 = createSprite(345,400,10,100)
wall10.shapeColor = "black";
wall11 = createSprite(180,200,160,10)
wall11.shapeColor = "black";
wall12 = createSprite(225,450,100,10)
wall12.shapeColor = "black";
wall13 = createSprite(395,200,200,10)
wall13.shapeColor = "black";
wall14 = createSprite(375,450,100,10)
wall14.shapeColor = "black";
wall15 = createSprite(180,250,10,100)
wall15.shapeColor = "black";
wall16 = createSprite(180,400,10,100)
wall16.shapeColor = "black";
wall17 = createSprite(420,250,10,100)
wall17.shapeColor = "black";
wall18 = createSprite(420,400,10,100)
wall18.shapeColor = "black";
wall19 = createSprite(490,323,10,400)
wall19.shapeColor = "black";
wall20 = createSprite(100,330,10,490)
wall20.shapeColor = "black";

//create exit



//create coins



}
function draw(){
 

if (GameState == "wait")
{background(splashscreenbg);
  score=0;
playbutton.show();
infobutton.show();

//make player, walls, coins and exit invisible in wait state

}
    infobutton.mousePressed(() => {
playbutton.hide();
infobutton.hide()
GameState = "about"
    })
    playbutton.mousePressed(() => {
        playbutton.hide();
        infobutton.hide()
        GameState = "play"
            })
    if (GameState == "about"){
        aboutGame()
    }
if (GameState == "play"){
  background(Game_Screen)
   

  // make player, exit, coins, visible in wait state
  


    //write conditions for moving the player using arrow keys
    
   
  
  
//write conditions for player bouncing off all the walls
 

  //write conditions for enemies bouncing off all the walls
  

  

  //write conditions for player touching all the coins

 



//write condition for player touching the exit


  //write conditions for win 
 
}

drawSprites();

//display score


//write condition for game state lose


}

//write function for win game

function aboutGame(){
  swal({
    title: "ABOUT GAME",
    text: "Collect all of the coins using the arrow keys. Each time you collect a coin a new zombie appears. Don't get infected!",
    textAlign: "center",
    imageUrl: "zombieimage.png",
    imageSize: "200x200",
    confirmButtonText: "Got It!",
    confirmButtonColor: "lightgreen",

    },
    function(){
        GameState = "wait"
    })
}

//write code for pop up in case of gameOver

