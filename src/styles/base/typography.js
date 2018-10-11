import styled from "styled-components";
import Typography from "typography";
import { moveInLeft, moveInRight } from "./animations";
import { media } from "../abstracts";

export const typography = new Typography({
  baseFontSize: "10px",
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: "Lato",
      styles: ["100", "300", "400", "700"]
    },
    {
      name: "Open Sans",
      styles: ["300", "400", "600"]
    }
  ],
  headerFontFamily: ["Open Sans", "sans-serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
  headerColor: "hsla(0,0%,0%,0.6)",
  bodyColor: "hsla(0,0%,0%,0.5)",
  headerWeight: "700",
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo }) => ({
    p: { lineHeight: 1.6 }
  })
  // See below for the full list of options.
});

export const HeadingPrimary = styled.h1`
  ${props => props.theme.utilities};
  color: #fff;
  text-transform: uppercase;

  /* 애니메이션 종료 후 작은 흔들림 같은 버그를 고치는 코드 */
  backface-visibility: hidden;
  margin-bottom: 6rem;
`;

export const HeadingPrimaryMain = styled.span`
  ${props => props.theme.utilities};
  display: block;
  font-size: 6rem;
  font-weight: 400;
  letter-spacing: 3.8rem;
  padding: 2rem 0;
  padding-left: 3.8rem;

  animation-name: ${moveInLeft};
  animation-duration: 1s;
  animation-timing-function: ease-out;

  ${media.phone`
    letter-spacing: 1rem;
    padding-left: 1rem;
    font-family: 5rem;
  `};
`;

export const HeadingPrimarySub = styled.span`
  ${props => props.theme.utilities};
  display: block;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 1.45rem;
  padding-left: 1.45rem;

  animation: ${moveInRight} 1s ease-out;

  ${media.phone`
    letter-spacing: 0.4rem;
    padding-left: 0.4rem;
    font-family: 5rem;
  `};
`;

export const HeadingSecondary = styled.h2`
  ${props => props.theme.utilities};
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  background-image: ${props => {
    const { COLOR_PRIMARY_LIGHT, COLOR_PRIMARY_DARK } = props.theme;
    return `linear-gradient(to right, ${COLOR_PRIMARY_LIGHT}, ${COLOR_PRIMARY_DARK})`;
  }};
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 0.2rem;
  transition: all 0.2s;

  &:hover {
    transform: skewY(2deg) skewX(15deg) scale(1.1);
    text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  ${media.tabPort`
    font-size: 3rem;
  `};
  ${media.phone`
    font-size: 2.5rem;
  `};
`;

export const HeadingTertiary = styled.h3`
  ${props => props.theme.utilities};
  font-size: ${props => props.theme.DEFAULT_FONT_SIZE};
  font-weight: 700;
  text-transform: uppercase;
`;

export const Paragraph = styled.p`
  ${props => props.theme.utilities};
  font-size: ${props => props.theme.DEFAULT_FONT_SIZE};

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export default typography;
