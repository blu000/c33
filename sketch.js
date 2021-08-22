function preload(){
  bgImage=loadImage('snow2.jpg')
  snowflake = loadImage('snow5.webp')
  panda= loadAnimation ('p1.png','p2.png','p3.png','p4.png')
}
function setup() {
  createCanvas(800,400);
  snowflakes= createSprite(200,0)
  snowflakes.addImage(snowflake)
  snowflakes.velocityY=3;
  snowflakes.scale=0.1;

  snowflakes1= createSprite(400,0)
  snowflakes1.addImage(snowflake)
  snowflakes1.velocityY=3;
  snowflakes1.scale=0.3;

  snowflakes2= createSprite(700,0)
  snowflakes2.addImage(snowflake)
  snowflakes2.velocityY=3;
  snowflakes2.scale=0.2;

  pandas = createSprite(200,350)
  pandas.addAnimation('panda',panda)
  pandas.scale=.2
}

function draw() {
  background(bgImage);  
  drawSprites();
  if (snowflakes.y===300||snowflakes1.y===300||snowflakes2.y===300){
    snowflakes.y===0
    snowflakes1.y===0;
    snowflakes2.y===0
  }
}