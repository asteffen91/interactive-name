let p = [];
const N = 1000;

const colorPallet = ['#343233', '#B6C8A9', '#C8EAD3', '#CFFFE5', '#CEDADA'];

function preload() {
  font = loadFont('Roboto-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  points = font.textToPoints('Austin', width * 0.05, height / 2, 400, {
    sampleFactor: 0.1,
    simplifyThreshold: 0
  });

  for (let i = 0; i < points.length; i++) {
    p.push(new Particle(width / 2, height / 2, points[i].x, points[i].y));
  }
}

function draw() {
  background(colorPallet[0]);

  for (let j = 0; j < p.length; j++) {
    p[j].update(mouseX, mouseY);
  }
}