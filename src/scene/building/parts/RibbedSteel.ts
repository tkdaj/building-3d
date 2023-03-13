import type { ColorRepresentation } from 'three';
import { RepeatWrapping, MeshStandardMaterial, TextureLoader, BoxGeometry, Mesh } from 'three';

import steelRibbedNormal from '../../../assets/steel_ribbed_normal.png';

const defaultWidth = 5;
const defaultHeight = 2;
const defaultDepth = 0.05;

const defaultColor: ColorRepresentation = 0x7d6d5c;

const loader = new TextureLoader();

function getTextureMap() {
  const ribbedMetalNormalMap = loader.load(steelRibbedNormal);
  ribbedMetalNormalMap.wrapS = RepeatWrapping;
  ribbedMetalNormalMap.wrapT = RepeatWrapping;
  return ribbedMetalNormalMap;
}

export class RibbedSteel extends Mesh<BoxGeometry, MeshStandardMaterial> {
  constructor(
    public width = defaultWidth,
    public height = defaultHeight,
    public depth = defaultDepth,
    public color = defaultColor
  ) {
    super(
      new BoxGeometry(width, height, depth),
      new MeshStandardMaterial({
        color,
        map: getTextureMap(),
      })
    );
  }
}
