import { CircleGeometry, MeshPhongMaterial, RepeatWrapping, TextureLoader, Mesh } from 'three';

import grass from 'assets/grass.jpg';
import grassNormal from 'assets/grass_normal.jpg';

const loader = new TextureLoader();

export class Grass extends Mesh<CircleGeometry, MeshPhongMaterial> {
  constructor() {
    super();
    this.initializeMaterial();
  }

  private initializeMaterial() {
    const repeatX = 600;
    const repeatY = 600;
    const normalMap = loader.load(grassNormal);
    const texture = loader.load(grass);
    normalMap.wrapS = RepeatWrapping;
    normalMap.wrapT = RepeatWrapping;
    texture.repeat.x = repeatX;
    texture.repeat.y = repeatY;
    normalMap.repeat.x = repeatX;
    normalMap.repeat.y = repeatY;

    // if (this._config.ground.repeatX) {
    //   repeatX = this._config.ground.repeatX;
    // }
    // if (this._config.ground.repeatY) {
    //   repeatY = this._config.ground.repeatY;
    // }

    const geom = new CircleGeometry(4e3, 30);
    const mat = new MeshPhongMaterial({
      specular: 13421772,
      shininess: 5,
      map: texture,
      normalMap,
    });
    this.receiveShadow = true;
    this.rotation.x = -Math.PI / 2;
    this.material = mat;
    this.geometry = geom;

    // mat.normalMap!.repeat.set(repeatX, repeatY);
  }
}
