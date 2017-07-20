
function setup() {
  var myCanvas = createCanvas(600, 400);
  myCanvas.parent('display');
  background(200, 200, 200);
}

function draw() {
  background(pulse[0] / 3, pulse[1] / 3, pulse[2] / 3);
}
