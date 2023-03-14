import { AmbientLight, DirectionalLight, Object3D } from 'three';

import { state } from 'appState';

export class SceneLighting extends Object3D {
  constructor() {
    super();
    this.addDirectionalLights();
    this.addAmbientLight();
    this.add(state.lights);
  }

  addDirectionalLights() {
    const directionalLight1 = new DirectionalLight(0xffffff, 0.3);
    directionalLight1.position.set(-5, 10, 10);
    state.lights.addDirectionalLight('sun1', directionalLight1);

    const directionalLight2 = new DirectionalLight(0xffffff, 0.3);
    directionalLight2.position.set(5, 10, -10);
    state.lights.addDirectionalLight('sun2', directionalLight2);
  }

  private addAmbientLight() {
    const ambientLight = new AmbientLight(0xffffff, 0.75);
    state.sceneManager.scene.add(ambientLight);
  }
}
