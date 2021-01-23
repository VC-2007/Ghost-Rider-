var ghost;
var ghostImage;

var tower;
var tImage;

var climber;
var cImage;

var door;
var doorImage;

var invi

gameState = "Play"




function preload(){
  
  tImage = loadImage("tower.png");
  ghostImage = loadImage("ghost-standing.png");
  cImage = loadImage("climber.png")
  doorImage = loadImage("door.png")
  
}






function setup(){
  createCanvas(600,600);
  
  tower = createSprite(300,300,600,600);
  tower.velocityY = 5
  tower.addImage(tImage)
  
  
  
  
  ghost = createSprite(300,300,10,10);
  ghost.addImage(ghostImage)
  ghost.scale = 0.3                                                  
  
  climberGroup = new Group();
  inviGroup = new Group();
  
}




function draw(){
  background("blue")
  
  if(gameState === "Play"){
    
  if(ghost.isTouching(climberGroup)){
    ghost.velocityY = 0
  }
  
  if(tower.y>400){
    tower.y = 300
  }
  
  if(keyDown("space")){
    ghost.velocityY = -10
  }
  ghost.velocityY = ghost.velocityY + 0.1
  
  if(keyDown("left")){
    ghost.x = ghost.x - 5
  }
    if(keyDown("right")){ 
    ghost.x = ghost.x + 5
  }
  
    if(ghost.isTouching(inviGroup)){
      gameState = "end"
    }
  spawnDoors();
  drawSprites()
  }
  else if(gameState === "end"){
    textSize(35)
    text("GAME OVER",200,300);
  }
}

function spawnDoors(){
  if(frameCount%200 ===0){
  door = createSprite(Math.round(random(100,500)),-50)
  door.addImage(doorImage)
  door.lifetime = 600
  door.velocityY = 1
    
  climber = createSprite(300,10)
    climber.x= door.x
  climber.addImage(cImage)
  climber.lifetime = 600
  climber.velocityY = 1
    climberGroup.add(climber)
    
     invi= createSprite(300,15,80,10)
   invi.x= door.x
  invi.lifetime = 600
  invi.velocityY = 1
    inviGroup.add(invi)
    
    ghost.depth = door.depth + 1
    
    invi.visible = false
  }
  
  
}