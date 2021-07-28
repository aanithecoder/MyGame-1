var chef_img, c1
var fridge, fridge_img

function preload(){
  chef_img = loadImage("images/chef.png");
  fridge_img = loadImage("images/fridge.png")
}

function setup() {
  createCanvas(800,400);
  c1 = createSprite(400, 200, 50, 50);
  c1.addImage(chef_img)
  c1.scale = 0.3

  fridge = createSprite(100, 200, 50, 50);
  fridge.addImage(fridge_img);
  fridge.scale = 0.1

 
}

function draw() {
  background(255, 255, 255);  

  if (keyDown("left")){
    c1.velocityX = -3;
  }

  if (keyDown("right")){
    c1.velocityX = 3;
  }

  if (c1.isTouching(fridge)|| c1.x > 450){
    c1.x = 400
  }



  drawSprites();
}