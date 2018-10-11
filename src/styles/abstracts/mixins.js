import { css } from 'styled-components';

export const clearfix = css`
  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;
export const backgroundImageGradient = css`
  background-image: ${props => {
    let gradient;
    const { linearStart, linearEnd } = props;
    const { COLOR_LINEAR_START, COLOR_LINEAR_END } = props.theme;
    if (linearStart && linearEnd) {
      gradient = `${props.linearStart}, ${props.linearEnd}`;
    } else if (COLOR_LINEAR_START && COLOR_LINEAR_END) {
      gradient = `${COLOR_LINEAR_START}, ${COLOR_LINEAR_END}`;
    } else {
      gradient = 'rgba(214, 214, 214, 0.8), rgba(56, 56, 56, 0.8)';
    }

    return `
      linear-gradient(to right bottom, ${gradient}),
      url(${props.backImg});
    `;
  }};
  `;
export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  `;

/*
0 - 600px:       Phone
600 - 900px:     Tablet portrait
900 - 1200px:    Tablet landscape
[1200 - 1800] is where our normal styles apply
1800px + :       Big desktop
*/
const sizes = {
  phone: 600,
  tabPort: 900,
  tabLand: 1200,
  bigDesktop: 1800
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (${
  label === 'bigDesktop' ? 'min-width' : 'max-width'
}: ${sizes[label] / 16}em),
           only screen and (hover: none) {
      ${css(...args)};
    }
    `;
  return acc;
}, {});

export const mixins = {
  clearfix,
  backgroundImageGradient,
  absoluteCenter,
  media
};
