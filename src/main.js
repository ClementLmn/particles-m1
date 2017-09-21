import Particle from './particle'
import './style.css';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

let NUMBER_PARTICLE = 5000;
let particles = [];

for(let i = 0; i <= NUMBER_PARTICLE; i++) particles.push(new Particle(canvas));

const animate = () =>{
    ctx.clearRect(0,0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update(canvas);
        p.draw(ctx);
    });
    requestAnimationFrame(animate);
};
animate();