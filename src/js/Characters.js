/* eslint-disable no-underscore-dangle */
export class Magician {
  constructor(name) {
    this.name = name;
    this.type = 'Magician';
    this.attack = 50;
    this.stoned = false;
  }

  set toBeStoned(value) {
    if (value === true) this.stoned = true;
  }

  set attackSection(x) {
    if (x > 10) throw new Error('To much!');
    if (x < 1) throw new Error('To little!');
    const i = this.attack / 100 * 10;
    const y = Math.round(Math.log2(x) * 5);
    if (this.stoned === true) this.attack -= y;
    this.attack -= (x - 1) * i;
  }
}

export class Daemon {
  constructor(name) {
    this.name = name;
    this.type = 'Daemon';
    this.attack = 70;
    this.stoned = false;
  }

  set toBeStoned(value) {
    if (value === true) this.stoned = true;
  }

  set attackSection(x) {
    if (x > 10) throw new Error('To much!');
    if (x < 1) throw new Error('To little!');
    const i = this.attack / 100 * 10;
    const y = Math.round(Math.log2(x) * 5);
    if (this.stoned === true) this.attack -= y;
    this.attack -= (x - 1) * i;
  }
}
