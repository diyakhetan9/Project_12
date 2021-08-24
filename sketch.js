var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaf, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;

  var options = Math.round(random(1,2));

  if(frameCount%80 === 0){
    if(options == 1){
      createApples();
    }

    else{
      createLeaves();
    }
  }

  drawSprites();
}

function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage("apple", appleImg);
  apple.scale = 0.05;
  apple.velocityY = 3;
  apple.depth = rabbit.depth;
  rabbit.depth = rabbit.depth + 1;
}

function createLeaves(){
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage("leaf", leafImg);
  leaf.scale = 0.05;
  leaf.velocityY = 3;
  leaf.depth = rabbit.depth;
  rabbit.depth = rabbit.depth + 1;
}