import Particle from './particle';
import dat from 'dat.gui/build/dat.gui.js';

const init = (center) => {
    const gui = new dat.GUI();
    gui.add(Particle, 'size');
    gui.add(center, 'active');
};

export { init };