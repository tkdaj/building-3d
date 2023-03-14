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
) {
  const positionMultiplier = leftOrRight === 'left' ? -1 : 1;
  const pitchAsRadianAngle = getRadiansFromRoofPitch(pitch);
  const panelWidth = getRoofSegmentWidth(buildingWidth, pitch) * (singleSlope ? 2 : 1);
  const panelLength = buildingLength;
  const panelPos = {
    x: (positionMultiplier * buildingWidth) / (singleSlope ? 2 : 4),
    y: (Math.sin(pitchAsRadianAngle) * panelWidth) / 2 + buildingWallsHeight,
    z: 0,
  };
  const roofPeakHeight = Math.sin(pitchAsRadianAngle) * panelWidth;

  return {
    panelWidth,
    panelLength,
    panelPos,
    roofPeakHeight,
  };
}
