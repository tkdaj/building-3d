import type { Scene } from 'three';

interface SceneManager {
  scene: Scene;
}

let _scene: Scene | null = null;

const sceneManager: SceneManager = {
  get scene(): Scene {
    return _scene!;
  },
  set scene(val: Scene) {
    _scene = val;
  },
};

export { sceneManager };
