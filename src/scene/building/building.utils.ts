import { Vector3 } from 'three';

import type { RoofPanelConfig } from 'appState/building';

import type { RoofPitch } from './parts/Roof';

export function getRadiansFromRoofPitch(pitch: RoofPitch) {
  const pitchFraction = pitch / 12;
  const pitchAsRadianAngle = (pitchFraction * Math.PI) / 4;
  return pitchAsRadianAngle;
}

export function getRoofSegmentWidth(buildingWidth: number, pitch: RoofPitch) {
  return buildingWidth / 2 / Math.cos(getRadiansFromRoofPitch(pitch));
}

export function getRoofSegmentData(
  buildingWidth: number,
  buildingLength: number,
  buildingWallsHeight: number,
  pitch: RoofPitch,
  leftOrRight: 'left' | 'right',
  singleSlope = false
): Omit<RoofPanelConfig, 'name' | 'setRotation'> {
  const positionMultiplier = leftOrRight === 'left' ? -1 : 1;
  const pitchAsRadianAngle = getRadiansFromRoofPitch(pitch);
  const panelWidth = getRoofSegmentWidth(buildingWidth, pitch) * (singleSlope ? 2 : 1);
  const panelLength = buildingLength;
  const panelPos = new Vector3(
    (positionMultiplier * buildingWidth) / (singleSlope ? 2 : 4),
    (Math.sin(pitchAsRadianAngle) * panelWidth) / 2 + buildingWallsHeight,
    0
  );
  // const roofPeakHeight = Math.sin(pitchAsRadianAngle) * panelWidth;

  return {
    width: panelWidth,
    height: panelLength,
    pos: panelPos,
    angle: pitchAsRadianAngle,
    // roofPeakHeight,
  };
}
