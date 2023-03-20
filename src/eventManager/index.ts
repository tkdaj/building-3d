import { leftClick, rightClick } from './mouseClick';
import { mouseMove } from './mouseMove';

export type MouseEventHandler = (e: MouseEvent) => void;

export interface EventManager {
  addListener: (handler: MouseEventHandler) => void;
  removeListener(handler: MouseEventHandler): boolean;
}

export const eventManager = {
  leftClick,
  rightClick,
  mouseMove,
};
