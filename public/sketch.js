
function setup() {
  var myCanvas = createCanvas(600, 400);
  myCanvas.parent('display');
  background(200, 200, 200);
}

function draw() {
  background(0, 50, pulse[2] / 3);
  // line(30, 20, 85, 75);
  // line(30, 20, pulse[0], pulse[1]);
  // line(100, pulse[0], 100, pulse[1]);
  // stroke(126);
  ellipse(pulse[0] / 5, pulse[1] / 5, pulse[0] / 8, pulse[1] / 8);
}
