import { Object3D } from 'three';

import { state } from 'appState';

export class Building extends Object3D {
  constructor() {
    super();
    this.initializeBuilding();
  }

  private initializeBuilding() {
    Object.values(state.buildingManager.wallObjects).forEach((wall) => {
      this.add(wall);
    });
    Object.values(state.buildingManager.roofObjects).forEach((roof) => {
      this.add(roof);
    });
  }
}
