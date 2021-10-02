let p = [];

let text = ' Austin ';
let fontSize = 400;

let points;
let bounds;

const colorPallet = ['#343233', '#B6C8A9', '#C8EAD3', '#CFFFE5', '#CEDADA'];

function preload() {
  font = loadFont('Roboto-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bounds = font.textBounds(text, 0, 0, fontSize);
  points = font.textToPoints(text, 0, 0, fontSize, {
    sampleFactor: 0.1,
    simplifyThreshold: 0
  });

  let sf = width / bounds.w;
  let vo = height / 2 + bounds.h / 2;

  for (let i = 0; i < points.length; i++) {
    p.push(new Particle(width / 2, height / 2, points[i].x * sf, points[i].y * sf + vo));
  }
}

function draw() {
  background(colorPallet[0]);

  for (let j = 0; j < p.length; j++) {
    p[j].update(mouseX, mouseY);
  }
}