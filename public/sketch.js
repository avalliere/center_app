
function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
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
  // background(0, pulse.bpm, 250);


  var high = color(54, 0, 51);
  var midHigh = color(39, 45, 83);
  var midLow = color(25, 90, 115);
  var low = color(11, 135, 147);


  if (pulse.bpm < 61) {
    background(low)
  } else if (pulse.bpm > 61 && pulse.bpm < 70) {
    background(midLow)
  } else if (pulse.bpm > 69 && pulse.bpm < 80) {
    background(midHigh)
  } else {
    background(high)
  };

  fill(255, 0, pulse.bpm * 2, 50);
  noStroke();
  ellipse(80, 80, pulse.pulse / 8, pulse.pulse / 8);
  ellipse(100, 25, pulse.pulse / 10, pulse.pulse / 10);
  ellipse(30, 300, pulse.pulse / 8, pulse.pulse / 8);
  ellipse(250, 80, pulse.pulse / 4, pulse.pulse / 4);
}
