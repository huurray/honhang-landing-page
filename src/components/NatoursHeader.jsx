/**
 * @flow
 */

import * as React from 'react';
import styled from 'styled-components';
import { media } from '../styles/abstracts';

const facebook = require('../common/facebook-logo.svg');
const instagram = require('../common/instagram.svg');

const BIG = '65em';
const MIDDLE = '55em';
const SMALL = '50em';

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
  transition: all 0.3s;
  @media (max-width: ${BIG}) {
    height: 70rem;
  }};
  @media (max-width: ${MIDDLE}) {
    height: 65rem;
  }};
  @media (max-width: ${SMALL}) {
    height: 55rem;
  }};
  @media (max-width: 40em) {
    clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
    height: 50rem;
  }};
`;
const LogoBox = styled.div`
  position: absolute;
  top: 1.8rem;
  left: 1.8rem;

  transition: all 0.3s;
  @media (max-width: ${MIDDLE}) {
    top: 1.5rem;
    left: 1.5rem;
  }};
`;
const Logo = styled.img`
  height: 9rem;
  transition: all 0.3s;
  @media (max-width: ${BIG}) {
    height: 4.5rem;
  }};
  @media (max-width: ${MIDDLE}) {
    height: 3.5rem;
  }};
  @media (max-width: ${SMALL}) {
    height: 3rem;
  }};
`;
const Container = styled.div`
  position: relative;
  height: 75rem;
  width: 100%;

  transition: all 0.3s;
  @media (max-width: ${BIG}) {
    height: 70rem;
  }};
  @media (max-width: ${MIDDLE}) {
    height: 65rem;
  }};
  @media (max-width: ${SMALL}) {
    height: 55rem;
  }};
  @media (max-width: 40em) {
    height: 50rem;
    margin-bottom: 5rem;
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

  transition: all 0.3s;
 @media (max-width: ${BIG}) {
    height: 3rem;
    margin: 0.8rem;
  }};
  @media (max-width: ${MIDDLE}) {
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
