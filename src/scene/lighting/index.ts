import { Object3D } from 'three';

import { AmbientSceneLights } from './AmbientLights';
import { Sun } from './Sun';

export class SceneLighting extends Object3D {
  constructor() {
    super();
    this.initializeLights();
  }

  initializeLights() {
    this.add(new Sun());
    this.add(new AmbientSceneLights());
  }
}
