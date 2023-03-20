import type { Intersection, Object3D } from 'three';
import { Raycaster } from 'three';

import { state } from 'appState';

const raycaster = new Raycaster();

export function getObjectsIntersectionsAtMouseLocation<Item extends Object3D = Object3D>(
  item: Object3D,
  recursive = false
): Intersection<Item>[] {
  raycaster.setFromCamera(state.mouse.position, state.sceneManager.mainCamera);
  return raycaster.intersectObject(item, recursive);
}
