import Magician from './js/magician';
import Daemon from './js/daemon';
/* eslint-disable no-console */
const magician = new Magician('Маг');

magician.toBeStoned = true;
magician.attackSection = 5;
console.log(magician);

console.log('*************************');

const daemon = new Daemon('Демон');

daemon.toBeStoned = true;
daemon.attackSection = 5;
console.log(daemon);
