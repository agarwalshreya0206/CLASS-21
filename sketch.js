var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(500, 100, 50, 80);
  fixedRect.shapeColor = "Green";
  fixedRect.debug = true;
  movingRect = createSprite(500, 500, 80, 30);
  movingRect.shapeColor = "Green";
  movingRect.debug = true;


  //movingRect.velocityY=-5;
  //fixedRect.velocityY=5;

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "Green";

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "Green";

  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "Green";

  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "Green";

}

function draw() {
  background(250,250,250);  
  movingRect.x = World.mouseX;
  movingRect.y= World.mouseY;

  //console.log(movingRect.x);
  //console.log(movingRect.x - fixedRect.x);
  //console.log(movingRect.y-fixedRect.y);
  //isTouching();

 // bounceoff(movingRect,fixedRect);

  if (isTouching(movingRect,gameObject4)){
    movingRect.shapeColor = "Blue";
    gameObject4.shapeColor = "Blue";
  }

  else {
    movingRect.shapeColor = "Green";
    gameObject4.shapeColor = "Green";
  }

  drawSprites();
}
 

 
