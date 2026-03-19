/**
 * App palette — flower-inspired habit tracker theme.
 */
export const colors = {
  petalBlue: '#5BA4E5',
  highlight: '#7BBDEE',
  /** Primary center yellow */
  centerYellow: '#F5C842',
  /** Lighter center yellow */
  centerYellowLight: '#F8D455',
  darkGreenDot: '#3D6B18',
  background: '#EEF5FF',
} as const;

export type ColorKey = keyof typeof colors;
