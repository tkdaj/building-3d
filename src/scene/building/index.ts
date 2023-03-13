import { Object3D } from 'three';

import { RibbedSteel } from './parts/RibbedSteel';

const defaultWall = new RibbedSteel();

export class Building extends Object3D {
  constructor() {
    super();
    const wallOffset = defaultWall.width / 2;
    const heightOffset = defaultWall.height / 2;
    const leftWall = defaultWall.clone();
    const rightWall = defaultWall.clone();
    const backWall = defaultWall.clone();
    const frontWall = defaultWall.clone();
    const leftRoof = defaultWall.clone();
    const rightRoof = defaultWall.clone();
    leftWall.position.set(-wallOffset, heightOffset, 0);
    rightWall.position.set(wallOffset, heightOffset, 0);
    backWall.position.set(0, heightOffset, -wallOffset);
    frontWall.position.set(0, heightOffset, wallOffset);
    leftRoof.position.set(-15, heightOffset, 0);
    rightRoof.position.set(-10, heightOffset, -10);
    this.add(leftWall, rightWall, backWall, frontWall);
  }
}
