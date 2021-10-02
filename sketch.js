let p = [];
const N = 1000;

const colorPallet = ['#343233', '#B6C8A9', '#C8EAD3', '#CFFFE5', '#CEDADA'];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(colorPallet[0]);
  if (p.length < N) {
    for (let i = 0; i < N / 50; i++) {
      p.push(new Particle(width / 2, height / 2, random(width), random(height)));
    }
  }

  for (let j = 0; j < p.length; j++) {
    p[j].update(mouseX, mouseY);
  }
}