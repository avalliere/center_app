
function setup() {
  var myCanvas = createCanvas(600, 400);
  myCanvas.parent('display');
  background(200, 200, 200);
}

function draw() {
  // pulse only experimental visualization
  // // background(0, 50, pulse[2] / 3);
  // background(0, 50, pulse[1]);
  // // line(30, 20, 85, 75);
  // // line(30, 20, pulse[0], pulse[1]);
  // // line(100, pulse[0], 100, pulse[1]);
  // // stroke(126);
  // // ellipse(pulse[0] / 5, pulse[1] / 5, pulse[0] / 8, pulse[1] / 8);
  // ellipse(pulse[0], pulse[1], pulse[0] / 2, pulse[1] / 2);

  // pulse and BPM
  background(0, 50, data[0]);
  ellipse(data[1] / 5, data[3] / 5, data[1] / 8, data[3] / 8);
}
