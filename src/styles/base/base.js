import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import { media, colors, fonts } from '../abstracts';


export const baseStyles = () => injectGlobal`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

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
    box-sizing: border-box;
  }
`;

export default baseStyles;
