import { Scene } from 'three';

// TODO: add all other objects here
let _scene: Scene | null = null;

export const state = {
  get scene(): Scene {
    if (_scene == null) {
      _scene = new Scene();
    }
    return _scene;
  },
};
