const canvas = document.getElementById('particle-canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
}
update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
}
draw() {
    context.fillStyle = 'white';
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    context.fill();
}
}

const particles = [];

function init() {
for (let i = 0; i < 50; i++) {
    particles.push(new Particle(canvas.width / 2, canvas.height / 2));
}
}

function animate() {
requestAnimationFrame(animate);
context.clearRect(0, 0, canvas.width, canvas.height);
for (const particle of particles) {
    particle.update();
    particle.draw();
}
}

init();
animate();

addEventListener('mousemove', (event) => {
const { clientX, clientY } = event;
particles.push(new Particle(clientX, clientY));
console.log('hey');
});