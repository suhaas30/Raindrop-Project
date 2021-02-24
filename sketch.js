const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var man, manImg;
var thunderImg1, thunderImg2;
var thunderCreatedFrame;





var maxDrops=100;


function preload(){
    manImg = loadImage("walking_1.png");
    thunderImg1 = loadImage("1.png");
    thunderImg2 = loadImage("2.png");
}

function setup(){
   createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;

    for (var i=0;i<maxDrops;i++){
      drops.push(new Rainfall(random(0,400), random(0,600)));

    }
    man = createSprite(200,600);
    man.addImage(manImg);
    man.scale=0.5
}

function draw(){
  background("black"); 
  Engine.update(engine);
  for (var i=0;i<drops.length;i++){
    drops[i].display();
    drops[i].updateY();
  }

  rand = Math.round(random(1,4));
  if(frameCount%80===0){
    thunderCreatedFrame=frameCount;
    thunder = createSprite(random(10,370), random(10,30), 10, 10);
    switch(rand){
      case 1: thunder.addImage(thunderImg1);
      break;
      case 2: thunder.addImage(thunderImg2);
      default: break;
    } 
    thunder.scale=random(0.3,0.6);
  }
  
  if(thunderCreatedFrame + 10 ===frameCount && thunder){
    thunder.destroy();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();
  
}   

