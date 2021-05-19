var fixedRect, movingRect;
var object1,object2,object3,object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite(100,100,50,50);
  object2 = createSprite(200,100,50,50);
  object3 = createSprite(300,100,50,50);
  object4 = createSprite(400,100,50,50);

  object1.shapeColor = "orange";
  object2.shapeColor = "green";
  object3.shapeColor = "red";
  object4.shapeColor = "purple";
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  sum(5,9);

  if(isTouching(movingRect,object2)){
    movingRect.shapeColor = "blue";
    object2.shapeColor = "blue";
  }
  else{
  movingRect.shapeColor = "green";
  object2.shapeColor = "green";
  }

  
  drawSprites();
}

function isTouching(ob1,ob2){
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
    && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
  
  return true;
}
else {
  
  return false;
}
}


function sum(num1,num2){
  var result = num1+num2;
  console.log(result);
}



