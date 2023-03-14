import type { ColorRepresentation } from 'three';
import { Color } from 'three';

import { RibbedSteel } from './RibbedSteel';

export const defaultRoofWidth = 5;
export const defaultRoofHeight = 2;
export const defaultRoofColor: ColorRepresentation = 0xe3dfeb;

export class Roof extends RibbedSteel {
  constructor(public width = defaultRoofWidth, public height = defaultRoofHeight) {
    super(width, height);
    this.material.color = new Color(defaultRoofColor);
  }
}
