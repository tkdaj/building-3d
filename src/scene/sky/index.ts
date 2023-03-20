import { CubeReflectionMapping, CubeTexture, RGBAFormat } from 'three';

import sky2 from 'assets/nx.jpg';
import sky4 from 'assets/ny.jpg';
import sky6 from 'assets/nz.jpg';
import sky1 from 'assets/px.jpg';
import sky3 from 'assets/py.jpg';
import sky5 from 'assets/pz.jpg';
import { cubeTextureLoader } from 'utils/loaders';

export class Sky extends CubeTexture {
  constructor() {
    super();
    const skyImages = [sky1, sky2, sky3, sky4, sky5, sky6];
    const skyTexture = cubeTextureLoader.load(skyImages);
    skyTexture.format = RGBAFormat;
    skyTexture.mapping = CubeReflectionMapping;
    return skyTexture;
  }
}
