import { Vector3 } from 'three';

export const Deg = {
  ['90']: Math.PI / 2,
  ['180']: Math.PI,
  ['270']: (Math.PI * 3) / 2,
  ['360']: Math.PI * 2,
} as const;

export const Direction = {
  up: new Vector3(0, 1, 0),
  down: new Vector3(0, -1, 0),
  north: new Vector3(0, 0, -1),
  south: new Vector3(0, 0, 1),
  east: new Vector3(1, 0, 0),
  west: new Vector3(-1, 0, 0),
} as const;

export const ftToM = 0.3048;
