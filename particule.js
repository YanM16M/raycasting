class Particule {
  
  constructor() {
    this.pos = createVector(width / 2, height / 2); 
    this.rays = [];
    
    for(let i = 0; i < 360; i += 2) {
       this.rays.push(new Ray(this.pos, radians(i)));
    }
    
  }
  
  update() {
     this.pos.x = mouseX;
     this.pos.y = mouseY;
  }  

  look(walls) {
    let pt;
    
    for(let ray of this.rays) {
      let closest = null;
      let record = Infinity;
      for(let wall of walls) {
        
        pt = ray.checkWall(wall);
        
        if (pt) {
          const d = p5.Vector.dist(this.pos, pt);
       
          if(d < record) {
            record = d;
            closest = pt;
          }
        }
          
        }
      
        if (closest) {
          line(this.pos.x, this.pos.y, closest.x, closest.y);
        }
      }

  }

  show() {
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 16);
    
    // on dessine les rays
    for(let ray of this.rays) {
      ray.draw(); 
    }
    
  }
 
  
}