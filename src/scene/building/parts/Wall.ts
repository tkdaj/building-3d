import type { ColorRepresentation } from 'three';
import { Color } from 'three';

import { RibbedSteel } from './RibbedSteel';

export const defaultWallColor: ColorRepresentation = 0x8a7967;

export class Wall extends RibbedSteel {
  constructor(public width: number, public height: number) {
    super(width, height);
    this.material.color = new Color(defaultWallColor);
  }
}
