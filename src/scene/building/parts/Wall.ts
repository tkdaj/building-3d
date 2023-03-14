import type { ColorRepresentation } from 'three';
import { Color } from 'three';

import { RibbedSteel } from './RibbedSteel';

export const defaultWallWidth = 5;
export const defaultWallHeight = 2;
export const defaultWallColor: ColorRepresentation = 0x8a7967;

export class Wall extends RibbedSteel {
  constructor(public width = defaultWallWidth, public height = defaultWallHeight) {
    super(width, height);
    this.material.color = new Color(defaultWallColor);
  }
}
