import { DirectionalLight } from 'three';

export class Sun extends DirectionalLight {
  constructor() {
    super(0xffffff, 0.5);
    this.position.set(-5, 10, 10);
  }
}
