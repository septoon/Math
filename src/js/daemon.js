import Characters from './Characters';

class Daemon extends Characters {
  constructor(name, attack, stoned) {
    super(name, attack, stoned);
    this.type = 'Daemon';
  }
}

export default Daemon;
