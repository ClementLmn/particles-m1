import Particle from './particle';
import dat from 'dat.gui/build/dat.gui.js';

const init = (center, centerBad) => {
    const gui = new dat.GUI();
    gui.add(Particle, 'size');
    gui.add(center, 'active');
    gui.add(centerBad, 'active');
    gui.add(Particle, 'diam');
};

export { init };