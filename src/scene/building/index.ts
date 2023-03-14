import { Object3D } from 'three';

import { roofPanelsConfig, wallsConfig } from './buildingConstants';
import { Roof } from './parts/Roof';
import { Wall } from './parts/Wall';

export class Building extends Object3D {
  constructor() {
    super();
    this.initializeWalls();
    this.initializeRoof();
  }

  private initializeWalls() {
    wallsConfig.forEach((config) => {
      const newWall = new Wall();
      newWall.position.set(config.pos.x, config.pos.y, config.pos.z);
      config.setRotation(newWall);
      newWall.name = config.name;
      this.add(newWall);
    });
  }

  private initializeRoof() {
    roofPanelsConfig.forEach((config) => {
      const newRoof = new Roof();
      newRoof.position.set(config.pos.x, config.pos.y, config.pos.z);
      config.setRotation(newRoof);
      newRoof.name = config.name;
      this.add(newRoof);
    });
  }
}
