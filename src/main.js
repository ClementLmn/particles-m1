import Particle from './particle';
import './style.css';
import {init} from './gui'

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let centerPoint= {active: false, x: canvas.width/2, y:canvas.height/2, otherAttraction: false};


let NUMBER_PARTICLE = 5000;
let particles = [];

javascript:(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);})()


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
document.addEventListener('click', (e) => {
    centerPoint.active = !centerPoint.active;
}, false);

document.addEventListener('mousemove', (e) => {
    centerPoint.x = e.clientX;
    centerPoint.y = e.clientY;
  }, false);
