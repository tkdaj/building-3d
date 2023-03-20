import { ftToM } from 'appConstants';

// TODO: convert all measurements to use this function. Then the UI can show feet, but the calculations can be done in meters.

// three.js uses meters as its unit of measurement, but building dimensions are typically measured in feet in the US.
export function getMeters(feet: number): number {
  return feet * ftToM;
}
