import { Object3D } from 'three';

// import { Concrete } from './Concrete';
import { Grass } from './Grass';

export class Ground extends Object3D {
  constructor() {
    super();
    this.initializeGround();
  }

  initializeGround() {
    this.add(new Grass() /*, new Concrete()*/);
  }
}
