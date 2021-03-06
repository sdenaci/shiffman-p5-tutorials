function Bubble (x, y) {
  this.x = x;
  this.y = y;
  this.lifespan = 255;

  this.display = function() {
    stroke(255);
    fill(255, this.lifespan);
    ellipse(this.x, this.y, 48, 48);
  }
  
  this.isFinished = function () {
    if(this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }
  
  this.update = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
    this.lifespan--;
  }
}
