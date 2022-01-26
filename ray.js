class Ray {
  
  constructor(pos, angle) {
     this.pos = pos;
     this.dir = p5.Vector.fromAngle(angle);
  }
  
  checkWall(wall) {
    
    let x1 = this.pos.x; let y1 = this.pos.y;
    let x2 = this.pos.x + this.dir.x;
    let y2 = this.pos.y + this.dir.y;
    
    let x3 = wall.pos.x; let y3 = wall.pos.y;
    let x4 = wall.dir.x;
    let y4 = wall.dir.y;
  
    let den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (den == 0) { return }
    
    // on calcul t
    let t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;

    // on calcul u
    let u = - (((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den);
                   
    if (t > 0 && u > 0 && u < 1) {
      let pt = createVector(0, 0);
      //pt.x = x1 + t * (x2 - x1);
      //pt.y = y1 + t * (y2 - y1);
      pt.x = x3 + u * (x4 - x3);
      pt.y = y3 + u * (y4 - y3);
      return pt;
    }
    return;
  }
  
  draw() {
    stroke(255); 
    strokeWeight(1);
    push();
    translate(this.pos.x, this.pos.y);
    line(0, 0, this.dir.x * 10, this.dir.y * 10);
    pop();
  }
  
}