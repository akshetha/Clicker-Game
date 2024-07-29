let score = 0;
let target;

function setup() {
  createCanvas(400, 400);
  background(137, 213, 210);

  target = new Sprite(100, 100, 50);
  target.color = 'black';

  setInterval(changeTarget, 1000);
}

function draw() {
  background(137, 213, 210);

  fill(0, 128, 128);
  textAlign(LEFT);
  textSize(20);
  text('Score = ' + score, 10, 30);

  if (mouseIsPressed) {
    if (dist(mouseX, mouseY, target.x, target.y) < target.diameter / 2) { //makes sure that the mouse is actually touching the circle
      if (target.shape == 'circle') {
        score++;
      } 
      else {
        score--; //else statement
      }
      target.x = -100; //move it off screen
    }
  }
} //add another one of these

/* NOTE YOU WILL NOT HAVE TO CHANGE THIS PART */ 
function changeTarget(){
  target.x = random(25, 375);
  target.y = random(25, 375);

  if (random() > 0.5) {
    target.shape = 'circle';
  } else {
    target.shape = 'box';
  }
}

