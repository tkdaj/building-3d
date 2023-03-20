import type { Event } from 'three';
import { Vector2 } from 'three';

import { eventManager } from 'eventManager';

const _mouse = new Vector2();

export function onMouseMove(e: Event) {
  e.preventDefault();

  _mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  _mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
}

eventManager.mouseMove.addListener(onMouseMove);

interface MouseState {
  position: Vector2;
}

const mouse: MouseState = {
  get position(): Vector2 {
    return _mouse;
  },
};

export { mouse };
