import { Scene } from 'three';

import { Building } from 'scene/building';
import { SceneLighting } from 'scene/lighting';

export class MainScene extends Scene {
  constructor() {
    super();
    this.add(new SceneLighting());
    this.add(new Building());
  }
}
