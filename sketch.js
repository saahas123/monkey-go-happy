var bananaImage,obstacleImage,obstaclegroup,backG,score,player;

function preload(){
  backImage = loadImage("jungle.jpg")
  player = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage = loadImage("banana.png");
   obstacle_Image = loadImage("stone.png");

}


function setup() {
  createCanvas(600, 400);

  backG = createSprite(0,0,300,400);
  backG.addImage("backround", backImage);
 var ground = createSprite(300,360,600,60);
 ground.visible = false;

  foodGroup = new Group();
  obstacleGroup = new Group();
 var monkey = createSprite(120,350,30,50);
 monkey.addAnimation("walking", player); 
monkey.scale = 0.2
  backG.x = backG.width/2;
  backG.velocityX = -4
  backG.scale = 1.2;
  score = 0;
}

function draw() {
  background(220);
  if(backG.x < 0 ){
    backG.x = backG.width/2
  }
  if(monkey.isTouching(obstacleGroup)){
    monkey.velocityX = 0;
    obstacleGroup.destroyEach();
    foodGroup.destroyEach();
     obstacleGroup.setVelocityXEach(0);
      foodGroup.setVelocityXEach(0);
      monkey.scale = 0.2;

      switch(score){
        case 10: player.scale = 0.12;
        break;
        case 20: player.scale = 0.14;
        break;
        case 30: player.scale = 0.16;
        break;
        case 40: player.scale = 0.18;
        break;
        defualt: break;
      }






  }
  if(monkey.isTouching(foodGroup)){
score = score + 2;

  }
spawnb();
Obstacle();
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
text("score:"+ score,500,50);
}

function spawnb(){
  if(World.frameCount % 80 === 0){
  var banana = createSprite(400,randomNumber(120,200),10,10);
  banana.setImage( "Banana",bananaImage);
  banana.velocityX = -3;
  banana.scale = 0.05;
  foodGroup.add(banana);
  banana.lifetime = 200;
  }}
  function Obstacle(){
    if(World.frameCount % 60 === 0){
      var obstacle = createSprite(400,330,20,20);
      obstacle.setImage( "Stone",obstacleImage);
      obstacle.lifetime = 200;
      obstacle.velocityX = -3;
      obstacle.scale = 0.1;
      obstacleGroup.add(obstacle);
    }
    
  
}
