/**
 * @flow
 */

import * as React from 'react';
import styled from 'styled-components';
import { media } from '../styles/abstracts';

const facebook = require('../common/facebook-logo.svg');
const instagram = require('../common/instagram.svg');

const Header = styled.header`
  height: 75rem;
  ${props => props.theme.mixins.backgroundImageGradient};
  background-size: cover;
  background-position: top;
  position: relative;

  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

  /* ${media.phone`
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  `} @media (min-resolution: 192dpi) and (min-width: 37.5em) { */
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
        linear-gradient(to bottom, ${gradient}),
        url(${props.backImgBig});
    `;
    }};
  /* } */

  @media (max-width: 50em) {
    height: 60rem;
  }};
  @media (max-width: 40em) {
    clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
    height: 50rem;
  }};
`;
const LogoBox = styled.div`
  position: absolute;
  top: 3rem;
  left: 3rem;
  @media (max-width: 50em) {
    top: 1.5rem;
    left: 1.5rem;
  }};
`;
const Logo = styled.img`
  height: 8rem;
  transition: all 0.3s;
  @media (max-width: 60em) {
    height: 6rem;
  }};
  @media (max-width: 50em) {
    height: 5rem;
  }};
  @media (max-width: 40em) {
    height: 4rem;
  }};
`;
const TextBox = styled.div`
  position: absolute;
  /* parent */
  top: 40%;
  left: 50%;
  /* itself */
  transform: translate(-50%, -50%);

  text-align: center;
`;
const Container = styled.div`
  position: relative;
  height: 750px;
  width: 100%;

  @media (max-width: 50em) {
    height: 600px;
  }};
`;
const AbsoluteBox = styled.div`
  position: absolute;
  width: 100%;
`;

const AbsoluteIconBox = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;
const IconImage = styled.img`
  height: 4rem;
  margin: 1rem;

  @media (max-width: 50em) {
    height: 2rem;
    margin: 0.5rem;
  }};
`;

type Props = {
  logo?: any,
  backImg?: any,
  children?: React.Node,
  linearStart?: string,
  linearEnd?: string
};

class NatoursHeader extends React.PureComponent<Props> {
  render(): React.Node {
    const { logo, backImg, children, ...props } = this.props;
    return (
      <Container>
        <Header backImg={backImg} {...props}>
          {logo && (
            <LogoBox>
              <Logo src={logo} alt="Logo" />
            </LogoBox>
          )}
        </Header>
        <AbsoluteBox>{children}</AbsoluteBox>
        <AbsoluteIconBox>
          <a href="https://www.facebook.com/honhang.me/">
            <IconImage src={facebook} />
          </a>
          <a href="https://www.instagram.com/honhang.me/">
            <IconImage src={instagram} />
          </a>
        </AbsoluteIconBox>
      </Container>
    );
  }
}

export default NatoursHeader;
