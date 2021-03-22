var balls = [];

function setup() {
  createCanvas(400, 400);
    //var i Starts At 0; Maximum Of Nine; Increase By 1
  for ( var i = 0; i <9; i++) {
  	balls[i] = new Ball();
  
  }
}

function draw() {
  background(0);
   for ( var i = 0; i <9; i++) {
   
     balls[i]. move();
     balls[i].display();
     
   }
}

function Ball() {
	this.x = random(0, width);
  this.y = random(0, height);
  
  this.display = function() {
  	fill(255);
  	noStroke();
    ellipse(this.x, this.y, 50, 50);
  }
  
  this.move = function () {
		this.x = this.x + random(-5,5);
		this.y = this.y + random(-5,5);

}
}