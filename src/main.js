import Particle from './particle';
import './style.css';
import {init} from './gui'

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let centerPoint= {active: false, x: canvas.width/2, y:canvas.height/2};


let NUMBER_PARTICLE = 20;
let particles = [];

init(centerPoint);

for(let i = 0; i <= NUMBER_PARTICLE; i++) particles.push(new Particle(canvas));

const animate = () =>{
    ctx.clearRect(0,0, canvas.width, canvas.height);
    if(centerPoint.active){
        particles.forEach(p => {
            p.toCenter(centerPoint);
            p.draw(ctx);
        });
    }else{
        particles.forEach(p => {
            p.update(canvas);
            p.draw(ctx);
        });
    }
    requestAnimationFrame(animate);
};
animate();
