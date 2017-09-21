import Particle from './particle';
import dat from 'dat.gui/build/dat.gui.js';

const init = () => {
    const gui = new dat.GUI();
    gui.add(Particle, 'size');
};

export { init };