import type { ColorRepresentation } from 'three';
import { Color } from 'three';

import { RibbedSteel } from './RibbedSteel';

export enum RoofPitch {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
}

export const defaultRoofColor: ColorRepresentation = 0xe3dfeb;

export class Roof extends RibbedSteel {
  constructor(buildingLength: number, buildingWidth: number) {
    super(buildingLength, buildingWidth);
    this.material.color = new Color(defaultRoofColor);
  }
}
