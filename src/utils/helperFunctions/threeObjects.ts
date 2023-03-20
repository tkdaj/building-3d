/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import type { BufferGeometry, Material, Mesh, Object3D } from 'three';

import { state } from 'appState';

export function scrubObject<Obj extends Object3D>(obj: Obj) {
  const meshObj = obj as unknown as Mesh<
    BufferGeometry,
    Material & { normalMap: null | { dispose: () => void } }
  >;
  if (meshObj.geometry != null) meshObj.geometry.dispose();
  if (meshObj.material != null) {
    if (meshObj.material.normalMap != null) meshObj.material.normalMap.dispose();
    meshObj.material.dispose();
  }
  state.sceneManager.scene.remove(obj);
}
