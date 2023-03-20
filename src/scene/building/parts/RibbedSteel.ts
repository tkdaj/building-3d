import { DoubleSide, RepeatWrapping, Mesh, MeshPhongMaterial, PlaneGeometry } from 'three';

import steelRibbedNormal from 'assets/steel_ribbed_normal.png';
import { textureLoader } from 'utils/loaders';

export class RibbedSteel extends Mesh<PlaneGeometry, MeshPhongMaterial> {
  constructor(public width: number, public height: number) {
    super();
    this.initializeGeometry();
    this.material = RibbedSteel.getRibbedSteelMaterial(this.width, this.height);
    this.castShadow = true;
    this.receiveShadow = true;
  }

  private initializeGeometry() {
    this.geometry = new PlaneGeometry(this.width, this.height, 1, 1);
  }

  public static getRibbedSteelMaterial(width: number, height: number) {
    const repeatCount = 7;
    const repeatX = width * repeatCount;
    const repeatY = height * repeatCount;
    const normalMap = textureLoader.load(steelRibbedNormal);
    normalMap.wrapS = RepeatWrapping;
    normalMap.wrapT = RepeatWrapping;
    normalMap.repeat.set(repeatX, repeatY);

    const mat = new MeshPhongMaterial({
      normalMap,
      shininess: 17,
      specular: 3355443,
      shadowSide: DoubleSide,
      side: DoubleSide,
    });
    return mat;
  }
}
