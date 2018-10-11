import { css, extend } from 'styled-components';
import { utilities } from './base/utilities';

const loyUtils = utilities;

class Loyed {
  constructor({ utils, sizes }) {
    this.utilsProps = loyUtils.extend`${utils}`;

    /**
     * media - default sizes
     * 0 - 600px:       Phone
     * 600 - 900px:     Tablet portrait
     * 900 - 1200px:    Tablet landscape
     * [1200 - 1800] is where our normal styles apply
     * 1800px + :       Big desktop
     */
    this.sizes = {
      phone: 600,
      tabPort: 900,
      tabLand: 1200,
      bigDesktop: 1800,
      ...sizes
    };

    this.media = Object.keys(sizes).reduce((acc, label) => {
      const selFirst = label === 'bigDesktop' ? 'min-width' : 'max-width';
      acc[label] = (...args) => css`
        @media only screen and (${selFirst}: ${sizes[label] / 16} em),
               only screen and (hover: none) {
          ${css(...args)};
        }
      `;
      return acc;
    }, {});
  }

  hexToRgb(hex) {
    // http://stackoverflow.com/a/5624139
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
      : null;
  }

  rgba(hex, alpha) {
    const color = this.hexToRgb(hex);
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
  }

  styled(styledComponent) {
    if (styledComponent.extend) {
      return styledComponent.extend`
        ${this.utilsProps}
      `;
    } else {
      throw new Error('It is not styled-component.');
    }
  }
}

export default Loyed;
