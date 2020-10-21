var wall,thicknes;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(10,20);
  weight = random(30,52);
  thickness = random(22,83);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "orange";
  bullet = createSprite(600 ,200,50,50);
  bullet.shapeColor = "black";
  bullet.velocityX = speed;
}

function draw() {
  background("blue");  

 if(myHasCollided(bullet,wall)){
    bullet.velocityX = 0;
    bullet.x = 1190;
    bullet,y = 200;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage<10){
      bullet.shapeColor = "green";
      
    }

    if(damage>10){
      bullet.shapeColor = "red";
      
    }
  }
  drawSprites();
}