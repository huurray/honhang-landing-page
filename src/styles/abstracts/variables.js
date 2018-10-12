// import { Colors } from './functions';

// COLORS
// const natours = {
//   COLOR_PRIMARY: "#55c57a",
//   COLOR_PRIMARY_LIGHT: "#7ed56f",
//   COLOR_PRIMARY_DARK: "#28b485",
//   COLOR_SECONDARY_LIGHT: "rgba(255, 185, 0, 0.8)",
//   COLOR_SECONDARY_DARK: "rgba(255, 119, 48, 0.8)",
//   COLOR_TERIARY_LIGHT: "rgba(41, 152, 255, 0.8)",
//   COLOR_TERIARY_DARK: "rgba(86, 67, 250, 0.8)",
//   COLOR_LINEAR_START: "rgba(126, 213, 111, 0.8)",
//   COLOR_LINEAR_END: "rgba(40, 180, 131, 0.8)"
// };

// const trilloColors = {
//   COLOR_PRIMARY: '#eb2f64',
//   COLOR_PRIMARY_LIGHT: '#ff3366',
//   COLOR_PRIMARY_DARK: '#ba266d'
// };

const nexter = {
  COLOR_PRIMARY: '#c69963',
  COLOR_PRIMARY_DARK: '#B28451',
  COLOR_SECONDARY: '#101d2c',
  COLOR_GRAY_LIGHT_1: '#f9f8f6',
  COLOR_GRAY_LIGHT_2: '#aaa',
  COLOR_GRAY_DARK_1: '#54483A',
  COLOR_GRAY_DARK_2: '#6D5D4B'
};

// const triColors = new Colors('trillo', trilloColors);
export const colors = nexter;

// FONT
export const DEFAULT_FONT_SIZE = '1.6rem';

// GRID
export const GRID_WIDTH = '114rem';
export const GUTTER_VERTICAL = '8rem';
export const GUTTER_VERTICAL_SMALL = '6rem';
export const GUTTER_HORIZONTAL = '6rem';

export const fonts = {
  DEFAULT_FONT_SIZE,
  FONT_PRIMARY: '\'Noto Sans KR\', sans-serif',
  FONT_DISPLAY: '\'Josefin Sans\', sans-serif'
};

export const grid = {
  GRID_WIDTH,
  GUTTER_VERTICAL,
  GUTTER_VERTICAL_SMALL,
  GUTTER_HORIZONTAL
};

export default { colors, fonts, grid };
