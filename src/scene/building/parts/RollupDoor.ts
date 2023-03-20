import type { ColorRepresentation } from 'three';
import { BoxGeometry, DoubleSide, Mesh, MeshPhongMaterial, RepeatWrapping } from 'three';

import overheadNormal from 'assets/overhead_normal.png';
import { textureLoader } from 'utils/loaders';

export const defaultRollupDoorColor: ColorRepresentation = 0xe3dfeb;
export const defaultRollupDoorWidth = 3;
export const defaultRollupDoorHeight = 1.5;

export class RollupDoor extends Mesh<BoxGeometry, MeshPhongMaterial> {
  placed = false;
  constructor(width: number, height: number) {
    super();
    const repeatCount = 7;
    const repeatX = width * repeatCount;
    const repeatY = height * repeatCount;
    const normalMap = textureLoader.load(overheadNormal);
    normalMap.wrapS = RepeatWrapping;
    normalMap.wrapT = RepeatWrapping;
    normalMap.repeat.set(repeatX, repeatY);
    normalMap.rotation = Math.PI / 2;

    this.geometry = new BoxGeometry(width, height, 0.1);
    this.material = new MeshPhongMaterial({
      normalMap,
      color: defaultRollupDoorColor,
      shininess: 22,
      specular: 3355443,
      flatShading: true,
      side: DoubleSide,
      shadowSide: DoubleSide,
    });
    this.castShadow = true;
    this.receiveShadow = true;
  }
}
