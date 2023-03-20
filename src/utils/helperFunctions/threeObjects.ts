/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import type { BufferGeometry, Material, Mesh } from 'three';

export function cleanObject<
  Obj extends Mesh<BufferGeometry, Material & { normalMap: null | { dispose: () => void } }>
>(obj: Obj) {
  const meshObj = obj as unknown as Mesh<
    BufferGeometry,
    Material & { normalMap: null | { dispose: () => void } }
  >;
  if (meshObj == null) return;
  if (meshObj.geometry != null) meshObj.geometry.dispose();
  if (meshObj.material != null) {
    if (meshObj.material.normalMap != null) meshObj.material.normalMap.dispose();
    meshObj.material.dispose();
  }
}

export function getBBox(geo: BufferGeometry) {
  geo.computeBoundingBox();
  return geo.boundingBox;
}
