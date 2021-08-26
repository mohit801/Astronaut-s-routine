var bg,sleep,brush,gym,drink,bath,move,astronaut;
function preload() {
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  bg= loadImage("iss.png");
  gym = loadAnimation("gym1.png","gym2.png");
  gym1 = loadAnimation("gym11.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  bath = loadAnimation("bath1.png","bath2.png");
  move = loadAnimation("move1.png");
}

function setup() {
  createCanvas(600,500);
  astronaut = createSprite(200,210);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg);
  drawSprites();
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
 
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("drinking", drink);
    astronaut.changeAnimation("drinking");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
  
}