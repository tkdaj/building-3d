import { Deg, Direction } from 'appConstants';

import { getRadiansFromRoofPitch, getRoofSegmentData } from './building.utils';
import { RoofPitch, type Roof } from './parts/Roof';
import type { Wall } from './parts/Wall';

export const defaultBuildingWidth = 5;
export const defaultBuildingLength = 10;
export const defaultWallHeight = 2;

const wallOffset = defaultBuildingWidth / 2;
const heightOffset = defaultWallHeight / 2;

export const wallsConfig = [
  {
    name: 'rightWall',
    pos: { x: wallOffset, y: heightOffset, z: 0 },
    width: defaultBuildingLength,
    height: defaultWallHeight,
    setRotation(wall: Wall) {
      wall.rotateOnWorldAxis(Direction.up, Deg[90]);
    },
  },
  {
    name: 'backWall',
    pos: { x: 0, y: heightOffset, z: -defaultBuildingLength / 2 },
    width: defaultBuildingWidth,
    height: defaultWallHeight,
    setRotation(wall: Wall) {
      wall.rotateOnWorldAxis(Direction.up, Deg[180]);
    },
  },
  {
    name: 'leftWall',
    pos: { x: -wallOffset, y: heightOffset, z: 0 },
    width: defaultBuildingLength,
    height: defaultWallHeight,
    setRotation(wall: Wall) {
      wall.rotateOnWorldAxis(Direction.up, Deg[270]);
    },
  },
  {
    name: 'frontWall',
    pos: { x: 0, y: heightOffset, z: defaultBuildingLength / 2 },
    width: defaultBuildingWidth,
    height: defaultWallHeight,
    setRotation(wall: Wall) {
      wall.rotateOnWorldAxis(Direction.up, 0);
    },
  },
];

const defaultRoofPitch = RoofPitch.Five;

const leftRoofData = getRoofSegmentData(
  defaultBuildingWidth,
  defaultBuildingLength,
  defaultWallHeight,
  defaultRoofPitch,
  'left'
);
const rightRoofData = getRoofSegmentData(
  defaultBuildingWidth,
  defaultBuildingLength,
  defaultWallHeight,
  defaultRoofPitch,
  'right'
);

export const roofPanelsConfig = [
  {
    name: 'leftRoof',
    pos: leftRoofData.panelPos,
    segmentLength: leftRoofData.panelLength,
    segmentWidth: leftRoofData.panelWidth,
    setRotation(roof: Roof) {
      roof.rotateY(Deg[90]);
      roof.rotateX(Math.PI / 2 - getRadiansFromRoofPitch(defaultRoofPitch));
    },
  },
  {
    name: 'rightRoof',
    pos: rightRoofData.panelPos,
    segmentLength: rightRoofData.panelLength,
    segmentWidth: rightRoofData.panelWidth,
    setRotation(roof: Roof) {
      roof.rotateY(Deg[90]);
      roof.rotateX(-Math.PI / 2 + getRadiansFromRoofPitch(defaultRoofPitch));
    },
  },
];
