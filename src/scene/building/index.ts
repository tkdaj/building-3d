import type { Intersection } from 'three';
import { MathUtils, Object3D } from 'three';

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

    if (closest.object != tempDoor.parent) {
      state.building.setRollupDoorParent(closest.object);
    }

    // Now we need to show the door if it isn't already visible, and update its position
    tempDoor.visible = true;

    const localVec = closest.object.worldToLocal(closest.point);
    const xPos = MathUtils.clamp(
      localVec.x,
      -(closest.object.geometry.parameters.width / 2) + tempDoor.geometry.parameters.width / 2,
      closest.object.geometry.parameters.width / 2 - tempDoor.geometry.parameters.width / 2
    );

    const yPos = closest.object.geometry.parameters.height - tempDoor.geometry.parameters.height;

    tempDoor.position.set(xPos, 0 - yPos / 2, 0);
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
