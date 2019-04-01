/* eslint-disable no-return-assign */
import { Magician, Daemon } from '../src/js/Characters';

test('Magician', () => {
  const received = new Magician('Маг');
  const expected = {
    name: 'Маг', type: 'Magician', attack: 50, stoned: false,
  };
  expect(received).toEqual(expected);
});

test('if true', () => {
  const received = new Magician('Маг');
  received.toBeStoned = true;
  const expected = {
    name: 'Маг', type: 'Magician', attack: 50, stoned: false,
  };
  expect(received).toEqual(expected);
});

test('Magician with attack', () => {
  const received = new Magician('Маг');
  received.attackSection = 5;
  const expected = {
    name: 'Маг', type: 'Magician', attack: 30, stoned: false,
  };
  expect(received).toEqual(expected);
});

test('Magician with attack and stoned', () => {
  const received = new Magician('Маг');
  received.toBeStoned = true;
  received.attackSection = 5;
  const expected = {
    name: 'Маг', type: 'Magician', attack: 18, stoned: true,
  };
  expect(received).toEqual(expected);
});

test('Magician throw "attack to much"', () => {
  const received = new Magician('Маг');
  const expected = () => received.attackSection = 11;

  expect(expected).toThrow();
});

test('Magician throw "attack to little"', () => {
  const received = new Magician('Маг');
  const expected = () => received.attackSection = 0;

  expect(expected).toThrow();
});

test('Daemon', () => {
  const received = new Daemon('Демон');
  const expected = {
    name: 'Демон', type: 'Daemon', attack: 50, stoned: false,
  };
  expect(received).toEqual(expected);
});

test('Daemon with attack', () => {
  const received = new Daemon('Демон');
  received.attackSection = 5;
  const expected = {
    name: 'Демон', type: 'Daemon', attack: 30, stoned: false,
  };
  expect(received).toEqual(expected);
});

test('Daemon with attack and stoned', () => {
  const received = new Daemon('Демон');
  received.toBeStoned = true;
  received.attackSection = 5;
  const expected = {
    name: 'Демон', type: 'Daemon', attack: 18, stoned: true,
  };
  expect(received).toEqual(expected);
});

test('Daemon throw "attack to much"', () => {
  const received = new Daemon('Демон');
  const expected = () => received.attackSection = 11;

  expect(expected).toThrow();
});

test('Daemon throw "attack to little"', () => {
  const received = new Daemon('Демон');
  const expected = () => received.attackSection = 0;

  expect(expected).toThrow();
});
