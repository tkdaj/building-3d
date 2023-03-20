import type { Camera, Renderer, Scene } from 'three';

interface SceneState {
  scene: Scene;
  mainCamera: Camera;
  renderer: Renderer;
}

let _scene: Scene | null = null;
let _mainCamera: Camera | null = null;
let _renderer: Renderer | null = null;

const sceneManager: SceneState = {
  get scene(): Scene {
    if (_scene == null) throw new Error('scene is not initialized');
    return _scene;
  },
  set scene(val: Scene) {
    _scene = val;
  },
  get mainCamera(): Camera {
    if (_mainCamera == null) throw new Error('mainCamera is not initialized');
    return _mainCamera;
  },
  set mainCamera(val: Camera) {
    _mainCamera = val;
  },
  get renderer(): Renderer {
    if (_renderer == null) throw new Error('renderer is not initialized');
    return _renderer;
  },
  set renderer(val: Renderer) {
    _renderer = val;
  },
};

export { sceneManager };
