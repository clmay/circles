let width, height, center, t0;

function setup() {
  width = windowWidth;
  height = windowHeight;
  createCanvas(width, height);

  t0 = Date.now();

  center = {
    x: width / 2,
    y: height / 2
  };
}

function draw() {
  background('#ccc');

  const t = Date.now() - t0;
  const radius = Math.sqrt(t);
  circle(center.x, center.y, radius);

  const rightOffset = width - 150;
  text('Seconds: ' + t / 1000, rightOffset, height - 50);
  text('Radius: ' + radius.toFixed(3), rightOffset, height - 30);
}
