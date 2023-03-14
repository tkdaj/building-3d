import type { AmbientLight, DirectionalLight } from 'three';
import { Object3D } from 'three';

interface LightsManager {
  directionalLights: Record<string, DirectionalLight>;
  ambientLights: Record<string, AmbientLight>;
  addDirectionalLight: (name: string, light: DirectionalLight) => void;
  addAmbientLight: (name: string, light: AmbientLight) => void;
  removeDirectionalLight: (name: string) => void;
  removeAmbientLight: (name: string) => void;
}

type DirectionalLights = Record<string, DirectionalLight>;
type AmbientLights = Record<string, AmbientLight>;

class Lights extends Object3D implements LightsManager {
  private _directionalLights: DirectionalLights = {};
  private _ambientLights: AmbientLights = {};

  get directionalLights(): DirectionalLights {
    return this._directionalLights;
  }
  get ambientLights(): AmbientLights {
    return this._ambientLights;
  }
  addDirectionalLight = (name: string, light: DirectionalLight) => {
    this.add(light);
    this._directionalLights[name] = light;
  };
  removeDirectionalLight(name: string) {
    if (name in this._directionalLights) {
      this.remove(this._directionalLights[name]);
      delete this._directionalLights[name];
    }
  }
  addAmbientLight(name: string, light: AmbientLight) {
    this.add(light);
    this._ambientLights[name] = light;
  }
  removeAmbientLight(name: string) {
    if (name in this.ambientLights) {
      this.remove(this._ambientLights[name]);
      delete this._ambientLights[name];
    }
  }
}

const lights = new Lights();

export { lights };
