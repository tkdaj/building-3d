import { AxesHelper, Scene } from 'three';

import { Building } from 'scene/building';
import { Ground } from 'scene/ground';
import { SceneLighting } from 'scene/lighting';

export class MainScene extends Scene {
  constructor() {
    super();
    const axesHelper = new AxesHelper(5);
    this.add(new SceneLighting());
    this.add(new Building());
    this.add(new Ground());
    this.add(axesHelper);
  }
}
