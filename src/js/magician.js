import Characters from './Characters';

class Magician extends Characters {
  constructor(name, attack, stoned) {
    super(name, attack, stoned);
    this.type = 'Magician';
  }
}

export default Magician;
