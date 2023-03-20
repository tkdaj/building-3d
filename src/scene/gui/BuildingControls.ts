import { GUI } from 'dat.gui';

import { state } from 'appState';
import { RoofPitch } from 'scene/building/parts/Roof';

const addRollupDoorLabel = 'Add Rollup Door. (Right click to delete)';

export class BuildingControls extends GUI {
  constructor() {
    super();
    this.initializeUI();
    return this;
  }

  initializeUI() {
    const buildingFolder = this.addFolder('Building');
    buildingFolder.add(state.building, 'length', 3, 20, 1).onChange((newVal) => {
      state.building.length = newVal;
    });
    buildingFolder.add(state.building, 'width', 3, 10, 1).onChange((newVal) => {
      state.building.width = newVal;
    });
    buildingFolder.add(state.building, 'wallHeight', 1, 4, 0.5).onChange((newVal) => {
      state.building.wallHeight = newVal;
    });
    buildingFolder
      .add(state.building, 'roofPitch', RoofPitch.One, RoofPitch.Five, 1)
      .onChange((newVal) => {
        state.building.roofPitch = newVal;
      });
    buildingFolder.add(
      {
        [addRollupDoorLabel]: function () {
          state.building.addRollupDoorObject();
        },
      },
      addRollupDoorLabel
    );

    buildingFolder.open();
  }
}
