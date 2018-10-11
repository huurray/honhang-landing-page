import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import typography from './typography';
import { media, colors, fonts } from '../abstracts';

/**
 * ORDER: Base + typography > general layout + grid > page layout > components
 */
export const baseStyles = () => injectGlobal`
  ${reset}
  /* ${typography.toString()} */

  html {
    font-size: 62.5%;
    ${media.tabLand`
      font-size: 56.25%;
    `}
    ${media.tabPort`
      font-size: 50%;
    `}
    ${media.phone`
      font-size: 40%;
    `}
    /* ${media.bigDesktop`
      font-size: 75%;
    `} */
  }

  body {
    line-height: normal;
    font-family: ${fonts.FONT_PRIMARY};
    color: ${colors.COLOR_GRAY_DARK_1};
  }
`;

export default baseStyles;
