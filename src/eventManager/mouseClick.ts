import type { EventManager, MouseEventHandler } from 'eventManager';

const leftClickHandlers: MouseEventHandler[] = [];
const rightClickHandlers: MouseEventHandler[] = [];

const LEFT_CLICK = 0;
const RIGHT_CLICK = 2;

document.addEventListener('mousedown', (e) => {
  if (e.button === LEFT_CLICK) {
    leftClickHandlers.forEach((handler) => {
      handler(e);
    });
  } else if (e.button === RIGHT_CLICK) {
    rightClickHandlers.forEach((handler) => {
      handler(e);
    });
  }
});

export const leftClick: EventManager = {
  addListener(handler) {
    leftClickHandlers.push(handler);
  },
  removeListener(handler) {
    const index = leftClickHandlers.findIndex((h) => h === handler);
    if (index > -1) {
      leftClickHandlers.splice(index, 1);
      return true;
    }
    return false;
  },
};

export const rightClick: EventManager = {
  addListener(handler) {
    rightClickHandlers.push(handler);
  },
  removeListener(handler) {
    const index = rightClickHandlers.findIndex((h) => h === handler);
    if (index > -1) {
      rightClickHandlers.splice(index, 1);
      return true;
    }
    return false;
  },
};
