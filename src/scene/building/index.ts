import type { Intersection } from 'three';
import { Object3D } from 'three';

import { state } from 'appState';
import { eventManager } from 'eventManager';
import { getObjectsIntersectionsAtMouseLocation } from 'utils/helperFunctions';

let rollupDoorCounter = 1;

export class Building extends Object3D {
  constructor() {
    super();
    this.initializeBuilding();
    this.addDoorListeners();
  }

  private initializeBuilding() {
    Object.values(state.building.wallObjects).forEach((wall) => {
      this.add(wall);
    });
    Object.values(state.building.roofObjects).forEach((roof) => {
      this.add(roof);
    });
  }

  private addDoorListeners() {
    eventManager.leftClick.addListener(this.handleLeftClick);
    eventManager.mouseMove.addListener(this.handleMouseMove);
    eventManager.rightClick.addListener(this.handleRightClick);
  }

  private handleMouseMove = () => {
    const tempDoor = state.building.tempRollupDoor;
    if (tempDoor == null) return;

    const closest = getClosestObjectBeingHoveredOn(Object.values(state.building.wallObjects));
    if (closest == null) return;

    // Now we need to show the door if it isn't already visible, and update its position
    tempDoor.visible = true;
    tempDoor.position.set(closest.point.x, 0.75, closest.point.z);
    tempDoor.rotation.set(
      closest.object.rotation.x,
      closest.object.rotation.y,
      closest.object.rotation.z
    );
  };
  private handleLeftClick = () => {
    const tempDoor = state.building.tempRollupDoor;
    if (tempDoor == null) return;

    const closest = getClosestObjectBeingHoveredOn(Object.values(state.building.wallObjects));
    if (closest == null) return;

    state.building.saveTempDoor(`rollupDoor${rollupDoorCounter++}`);
  };

  private handleRightClick = () => {
    const tempDoor = state.building.tempRollupDoor;
    if (tempDoor != null) {
      state.building.cancelAddRollupDoorObject();
      return;
    }

    const closest = getClosestObjectBeingHoveredOn(Object.values(state.building.rollupDoorObjects));
    if (closest == null) return;

    state.building.removeRollupDoorObject(closest.object.name);
  };
}

function getClosestObjectBeingHoveredOn<ObjectType extends Object3D>(
  allObjects: ObjectType[]
): Intersection<ObjectType> | null {
  const hoveredObjects = allObjects
    .map((obj) => getObjectsIntersectionsAtMouseLocation<ObjectType>(obj))
    .flat()
    .sort((a, b) => a.distance - b.distance);

  if (hoveredObjects.length === 0) return null;

  // if length !== 0, then a user is hovering over one of the objects. Return the closest one.
  return hoveredObjects[0];
}
