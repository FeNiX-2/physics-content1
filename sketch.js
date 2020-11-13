function setup() {
  createCanvas(800,400);
  rect2=createSprite(400,100,100,60);
  rect1=createSprite(400,200, 100,60);
  rect1.shapeColor="green";
  rect2.shapeColor="green";
  //rect1.velocityY = -3;
  //rect2.velocityY = -2;

  rect3 = createSprite(200,100,50,10);
  rect4= createSprite(250,100,10,50);
  rect3.velocityX=2
  rect4.velocityX=-2
  rect5=createSprite(300,150,50,10);
  rect6=createSprite(280,180,10,50);
}

function draw() {
  background(255,255,255);  
  rect1.x=World.mouseX;
  rect1.y=World.mouseY;
  //IsTouching
  if (isTouching(rect2,rect1)){
    rect1.shapeColor = "blue";
    rect2.shapeColor = "blue";
  }
  else{
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
  }
  bounceOff(rect3,rect4)
  //console.log(rect1.y);

  drawSprites();
  
}





