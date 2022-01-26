class Wall {

    constructor(pos, pos2) {
      this.pos = pos;
      this.dir = pos2;
    }
  
    draw() {
      strokeWeight(1);
      stroke(255);
    
      line(this.pos.x, this.pos.y, this.dir.x, this.dir.y);
    }
  
}
