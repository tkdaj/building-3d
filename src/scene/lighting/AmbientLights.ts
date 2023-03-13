import { AmbientLight, Object3D } from 'three';

export class AmbientSceneLights extends Object3D {
  constructor() {
    super();
    this.initializeLights();
  }

  initializeLights() {
    const light1 = new AmbientLight(0xffffff, 0.5);
    const light2 = new AmbientLight(0xffffff, 0.5);
    this.position.set(0, 0, 0);
    light1.position.set(10, 10, 10);
    light2.position.set(-10, 10, -10);
    this.add(light1);
    this.add(light2);
  }
}
