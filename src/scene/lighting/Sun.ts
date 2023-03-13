import { DirectionalLight } from 'three';

export class Sun extends DirectionalLight {
  constructor() {
    super(0xffffff, 1);
    this.position.set(-5, 10, 10);
  }
}
