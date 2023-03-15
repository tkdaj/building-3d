import { Color, PlaneGeometry, Quaternion, Vector3 } from 'three';

import { Deg, Direction } from 'appConstants';
import { getRadiansFromRoofPitch, getRoofSegmentData } from 'scene/building/building.utils';
import { RibbedSteel } from 'scene/building/parts/RibbedSteel';
import { defaultRoofColor, Roof, RoofPitch } from 'scene/building/parts/Roof';
import { defaultWallColor, Wall } from 'scene/building/parts/Wall';

export interface WallPanelConfig {
  name: string;
  pos: Vector3;
  width: number;
  height: number;
  setRotation: (wall: Wall) => void;
}
export type RoofPanelConfig = WallPanelConfig & { angle: number };

type WallObjects = Record<string, Wall>;
type RoofObjects = Record<string, Roof>;

interface BuildingState {
  width: number;
  length: number;
  wallHeight: number;
  roofPitch: RoofPitch;
  wallsData: WallPanelConfig[];
  roofData: RoofPanelConfig[];
  wallObjects: WallObjects;
  roofObjects: RoofObjects;
}

class BuildingManager implements BuildingState {
  private _wallsData: WallPanelConfig[] = [];
  private _roofData: RoofPanelConfig[] = [];
  private _wallObjects: WallObjects = {};
  private _roofObjects: RoofObjects = {};
  private _width = 5;
  private _length = 10;
  private _wallHeight = 2;
  private _roofPitch = RoofPitch.Five;

  constructor() {
    this.updateBuildingData();
  }

  get wallObjects() {
    return this._wallObjects;
  }

  get roofObjects() {
    return this._roofObjects;
  }

  get width() {
    return this._width;
  }

  set width(newVal: number) {
    this._width = newVal;
    this.updateBuildingData();
  }

  get length() {
    return this._length;
  }

  set length(newVal: number) {
    this._length = newVal;
    this.updateBuildingData();
  }

  get wallHeight() {
    return this._wallHeight;
  }

  set wallHeight(newVal: number) {
    this._wallHeight = newVal;
    this.updateBuildingData();
  }

  get roofPitch() {
    return this._roofPitch;
  }

  set roofPitch(newVal: RoofPitch) {
    this._roofPitch = newVal;
    this.updateBuildingData();
  }

  get roofData() {
    return this._roofData;
  }

  get wallsData() {
    return this._wallsData;
  }

  private updateBuildingData = () => {
    this._wallsData = [
      {
        name: 'rightWall',
        pos: new Vector3(this._width / 2, this._wallHeight / 2, 0),
        width: this._length,
        height: this._wallHeight,
        setRotation(wall: Wall) {
          wall.rotateOnWorldAxis(Direction.up, Deg[90]);
        },
      },
      {
        name: 'backWall',
        pos: new Vector3(0, this._wallHeight / 2, -this._length / 2),
        width: this._width,
        height: this._wallHeight,
        setRotation(wall: Wall) {
          wall.rotateOnWorldAxis(Direction.up, Deg[180]);
        },
      },
      {
        name: 'leftWall',
        pos: new Vector3(-this._width / 2, this._wallHeight / 2, 0),
        width: this._length,
        height: this._wallHeight,
        setRotation(wall: Wall) {
          wall.rotateOnWorldAxis(Direction.up, Deg[270]);
        },
      },
      {
        name: 'frontWall',
        pos: new Vector3(0, this._wallHeight / 2, this._length / 2),
        width: this._width,
        height: this._wallHeight,
        setRotation(wall: Wall) {
          wall.rotateOnWorldAxis(Direction.up, 0);
        },
      },
    ];

    this._wallsData.forEach((config) => {
      let newWall = this._wallObjects[config.name];
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (newWall == null) {
        newWall = new Wall(config.width, config.height);
        newWall.name = config.name;
        config.setRotation(newWall);
      } else {
        newWall.geometry.dispose();
        newWall.geometry = new PlaneGeometry(config.width, config.height);
        newWall.material.dispose();
        newWall.material = RibbedSteel.getRibbedSteelMaterial(config.width, config.height);
        newWall.material.color = new Color(defaultWallColor);
      }
      newWall.position.set(config.pos.x, config.pos.y, config.pos.z);
      this._wallObjects[config.name] = newWall;
    });

    this._roofData = [
      {
        ...getRoofSegmentData(this._width, this._length, this._wallHeight, this._roofPitch, 'left'),
        name: 'leftRoof',
        setRotation: (roof: Roof) => {
          roof.rotateY(Deg[90]);
          roof.rotateX(Math.PI / 2 - getRadiansFromRoofPitch(this._roofPitch));
        },
      },
      {
        ...getRoofSegmentData(
          this._width,
          this._length,
          this._wallHeight,
          this._roofPitch,
          'right'
        ),
        name: 'rightRoof',
        setRotation: (roof: Roof) => {
          roof.rotateY(Deg[90]);
          roof.rotateX(-Math.PI / 2 + getRadiansFromRoofPitch(this._roofPitch));
        },
      },
    ];
    this._roofData.forEach((config) => {
      let newRoof = this._roofObjects[config.name];
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (newRoof == null) {
        newRoof = new Roof(config.height, config.width);
        newRoof.name = config.name;
      } else {
        newRoof.geometry.dispose();
        newRoof.material.dispose();
        newRoof.geometry = new PlaneGeometry(config.height, config.width);
        newRoof.material = RibbedSteel.getRibbedSteelMaterial(config.width, config.height);
        newRoof.material.color = new Color(defaultRoofColor);
      }
      const angle1 = new Quaternion();
      angle1.setFromAxisAngle(new Vector3(0, 1, 0), Math.PI / 2);
      newRoof.setRotationFromAxisAngle(
        new Vector3(0, 0, 1),
        Math.PI / 2 + (config.name === 'leftRoof' ? config.angle : -config.angle)
      );
      newRoof.quaternion.multiply(angle1);
      newRoof.position.set(config.pos.x, config.pos.y, config.pos.z);
      this._roofObjects[config.name] = newRoof;
    });
  };
}

const buildingManager = new BuildingManager();

export { buildingManager };
