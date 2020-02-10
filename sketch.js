var sun;
var mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;
var sunimg,mercuryimg,venusimg,earthimg,marsimg,jupiterimg,saturnimg,uranusimg,neptuneimg;
var angle = 0;
var anglespeed = 1.3;

function preaload(){
sunimg = loadImage("sun.jpg");
mercuryimg = loadImage("mercury.jpg");
venusimg = loadImage("venus.jpg");
earthimg = loadImage("earth.jpg");
marsimg = loadImage("mars.jpg");
jupiterimg = loadImage("jupiter.jpg");
saturnimg = loadImage("saturn.jpg");
uranusimg = loadImage("uranus.jpg");
neptuneimg = loadImage("neptune.jpg");
}

function setup() {
  createCanvas(1100,600);
  //creating the sprites for planets
  sun  = createSprite(500,160,50,50);
  sun.scale = 1;
  sun.setCollider("circle",0,0,30);
  sun.debug="true";

  mercury = createSprite(400,0,50,50);
  mercury.scale = 0.2;
  mercury.setCollider("circle",0,0,50);
  mercury.debug="true";

  venus  = createSprite(300,40,50,50);
  venus.scale = 0.2;
  venus.setCollider("circle",0,0,50);
  venus.debug="true";

  earth= createSprite(200,80,50,50);
  earth.scale = 0.4;
  earth.setCollider("circle",0,0,50);
  earth.debug="true";

  mars  = createSprite(100,120,50,50);
  mars.scale = 0.3;
  mars.setCollider("circle",0,0,50);
  mars.debug="true";

  jupiter = createSprite(600,200,50,50);
  jupiter.scale = 0.7;
  jupiter.setCollider("circle",0,0,50);
  jupiter.debug="true";

  saturn  = createSprite(700,240,50,50);
  saturn.scale = 0.6;
  saturn.setCollider("circle",0,0,50);
  saturn.debug="true";

  uranus= createSprite(800,280,50,50);
  uranus.scale = 0.5;
  uranus.setCollider("circle",0,0,50);
  uranus.debug="true";

  neptune = createSprite(900,320,50,50);
  neptune.scale = 0.45;
  neptune.setCollider("circle",0,0,50);
  neptune.debug="true";
  }

function draw() {
  //set background color
  background(0);
   
//increasing the size of the sun
 if(frameCount%7 === 0){
   sun.scale = sun.scale+0.15;
 }
   
if(sun.isTouching(mercury)){
  mercury.destroy();
}
if(sun.isTouching(venus)){
  venus.destroy();
}
if(sun.isTouching(earth)){
  earth.destroy();
}
if(sun.isTouching(mars)){
  mars.destroy();
}
if(sun.isTouching(jupiter)){
  jupiter.destroy();
}
if(sun.isTouching(saturn)){
  saturn.destroy();
}
if(sun.isTouching(uranus)){
  uranus.destroy();
}
if(sun.isTouching(neptune)){
  neptune.destroy();
}

angleMode(DEGREES);
rotate(angle);

angle = angle + anglespeed;

 drawSprites();
}
