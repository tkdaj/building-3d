import { Deg, Direction } from 'appConstants';

import type { Roof } from './parts/Roof';
import type { Wall } from './parts/Wall';
import { defaultWallHeight, defaultWallWidth } from './parts/Wall';

const wallOffset = defaultWallWidth / 2;
const heightOffset = defaultWallHeight / 2;
export const wallsConfig = [
  {
    name: 'leftWall',
    pos: { x: -wallOffset, y: heightOffset, z: 0 },
    setRotation(wall: Wall) {
      wall.rotateOnWorldAxis(Direction.up, Deg[270]);
    },
  },
  {
    name: 'rightWall',
    pos: { x: wallOffset, y: heightOffset, z: 0 },
    setRotation(wall: Wall) {
      wall.rotateOnWorldAxis(Direction.up, Deg[90]);
    },
  },
  {
    name: 'backWall',
    pos: { x: 0, y: heightOffset, z: -wallOffset },
    setRotation(wall: Wall) {
      wall.rotateOnWorldAxis(Direction.up, Deg[180]);
    },
  },
  {
    name: 'frontWall',
    pos: { x: 0, y: heightOffset, z: wallOffset },
    setRotation(wall: Wall) {
      wall.rotateOnWorldAxis(Direction.up, 0);
    },
  },
];

export const roofPanelsConfig = [
  {
    name: 'leftRoof',
    pos: { x: -wallOffset / 2, y: heightOffset + defaultWallHeight, z: 0 },
    setRotation(roof: Roof) {
      roof.rotateOnWorldAxis(Direction.up, Deg[90]);
      roof.rotateOnWorldAxis(Direction.north, Math.PI / 3);
    },
  },
  {
    name: 'rightRoof',
    pos: { x: wallOffset / 2, y: heightOffset + defaultWallHeight, z: 0 },
    setRotation(roof: Roof) {
      roof.rotateOnWorldAxis(Direction.up, Deg[90]);
      roof.rotateOnWorldAxis(Direction.north, -Math.PI / 3);
    },
  },
];
