import { MeshStandardMaterial, PlaneGeometry, Mesh } from 'three';

export class Concrete extends Mesh<PlaneGeometry, MeshStandardMaterial> {
  constructor() {
    super(new PlaneGeometry(100, 100), new MeshStandardMaterial());
  }
}
