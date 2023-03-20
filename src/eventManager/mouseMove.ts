import type { EventManager, MouseEventHandler } from 'eventManager';

const handlers: MouseEventHandler[] = [];

document.addEventListener('mousemove', (e) => {
  handlers.forEach((handler) => {
    handler(e);
  });
});

export const mouseMove: EventManager = {
  addListener(handler) {
    handlers.push(handler);
  },
  removeListener(handler) {
    const index = handlers.findIndex((h) => h === handler);
    if (index > -1) {
      handlers.splice(index, 1);
      return true;
    }
    return false;
  },
};
