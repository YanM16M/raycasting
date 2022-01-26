let particule;
let walls = [];

// CONSTANTES
const MAX_WALLS = 5;

function setup() {
  createCanvas(400, 400);
  
  particule = new Particule();
  
  for (let i = 0; i < MAX_WALLS; i++) {
    walls[i] = new Wall(createVector(random(width), random(height)), createVector(random(width), random(height)));
  }
  
}

function draw() {
  background(10);
  
  // obstacles
  for (let i = 0; i < MAX_WALLS; i++) {
     walls[i].draw(); 
  }

  // particule
  particule.update();
  particule.look(walls);
  particule.show();
  
  
}