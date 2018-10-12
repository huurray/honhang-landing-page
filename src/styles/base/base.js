import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import { colors, fonts } from '../abstracts';


export const baseStyles = () => injectGlobal`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    line-height: normal;
    font-family: ${fonts.FONT_PRIMARY};
    color: ${colors.COLOR_GRAY_DARK_1};
    box-sizing: border-box;
  }
`;

export default baseStyles;
