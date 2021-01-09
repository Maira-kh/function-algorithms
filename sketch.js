var fixedRect, movingRect,rectM,rectF;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;


  rectF=createSprite(200,200,70,80);
  rectM=createSprite(250,200,50,50)
  rectF.shapeColor="orange";
  rectM.shapeColor="orange";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(fixedRect,movingRect);

  edges=createEdgeSprites();

  fixedRect.bounceOff(edges[2]);
  fixedRect.bounceOff(edges[3]);
  movingRect.bounceOff(edges[2]);
  movingRect.bounceOff(edges[3]);

  rectM.x=mouseX;
  rectM.y=mouseY;

  if(isTouching(rectM,rectF)){
    rectF.shapeColor="pink";
    rectM.shapeColor="pink";
  }
  else {
    rectF.shapeColor="orange";
    rectM.shapeColor="orange";
  }

  
  drawSprites();
}

