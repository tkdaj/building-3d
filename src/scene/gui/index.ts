import { GUI } from 'dat.gui';

import { state } from 'appState';
import { RoofPitch } from 'scene/building/parts/Roof';

export class Controls extends GUI {
  constructor() {
    super();
    this.initializeUI();
    return this;
  }

  initializeUI() {
    const buildingFolder = this.addFolder('Building');
    buildingFolder.add(state.buildingManager, 'length', 3, 20, 1).onChange((newVal) => {
      state.buildingManager.length = newVal;
    });
    buildingFolder.add(state.buildingManager, 'width', 3, 10, 1).onChange((newVal) => {
      state.buildingManager.width = newVal;
    });
    buildingFolder.add(state.buildingManager, 'wallHeight', 1, 4, 0.5).onChange((newVal) => {
      state.buildingManager.wallHeight = newVal;
    });
    buildingFolder
      .add(state.buildingManager, 'roofPitch', RoofPitch.One, RoofPitch.Five, 1)
      .onChange((newVal) => {
        state.buildingManager.roofPitch = newVal;
      });
    buildingFolder.open();
  }
}
