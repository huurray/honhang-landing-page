/**
 * @flow
 */

import * as React from "react";
import styled from "styled-components";
import Grid, { Row, Col } from "./Grid";
import { media } from "../styles/abstracts";

const LogoImgSmall1x = require("../common/img/logo-green-small-1x.png");
const LogoImgSmall2x = require("../common/img/logo-green-small-2x.png");
const LogoImg1x = require("../common/img/logo-green-1x.png");
const LogoImg2x = require("../common/img/logo-green-2x.png");

const Footer = styled.footer`
  background-color: ${props => props.theme.COLOR_GREY_DARK_3};
  padding: 10rem 0;
  font-size: 1.4rem;
  color: ${props => props.theme.COLOR_GREY_LIGHT_1};

  ${media.tabPort`
    padding: 8rem 0;
  `};
`;
const FooterLogoBox = styled.div`
  text-align: center;
  margin-bottom: 8rem;

  ${media.tabPort`
    margin-bottom: 6rem;
  `};
`;
const Logo = styled.picture`
  width: 15rem;
  height: auto;
`;
const FooterNavigation = styled.div`
  border-top: 1px solid ${props => props.theme.COLOR_GREY_DARK};
  padding-top: 2rem;
  display: inline-block;

  ${media.tabPort`
    width: 100%;
    text-align: center;
  `};
`;
const FooterList = styled.ul`
  list-style: none;
  margin: 0;
`;
const FooterListItem = styled.li`
  display: inline-block;

  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;
const FooterCopyRight = styled.p`
  border-top: 1px solid ${props => props.theme.COLOR_GREY_DARK};
  padding-top: 2rem;
  width: 80%;
  float: right;

  ${media.tabPort`
    width: 100%;
    float: none;
  `};
`;
const FooterLink = styled.a`
  &:link,
  &:visited {
    background-color: ${props => props.theme.COLOR_GREY_DARK_3};
    color: ${props => props.theme.COLOR_GREY_LIGHT_1};
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    transition: all 0.2s;
  }

  &:hover,
  &:active {
    color: ${props => props.theme.COLOR_PRIMARY};
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
    transform: rotate(5deg) scale(1.3);
  }
`;

class NatoursFooter extends React.PureComponent {
  render(): React.Node {
    return (
      <Footer>
        <FooterLogoBox>
          <Logo>
            <source
              srcSet={`${LogoImgSmall1x} 1x, ${LogoImgSmall2x} 2x`}
              media="(max-width: 37.5em)"
            />
            <img srcSet={`${LogoImg1x} 1x, ${LogoImg2x} 2x`} alt="Full logo" />
          </Logo>
        </FooterLogoBox>

        <Grid>
          <Row>
            <Col col={2}>
              <FooterNavigation>
                <FooterList>
                  <FooterListItem>
                    <FooterLink href="#">Company</FooterLink>
                  </FooterListItem>
                  <FooterListItem>
                    <FooterLink href="#">Contact us</FooterLink>
                  </FooterListItem>
                  <FooterListItem>
                    <FooterLink href="#">Carrers</FooterLink>
                  </FooterListItem>
                  <FooterListItem>
                    <FooterLink href="#">Privacy policy</FooterLink>
                  </FooterListItem>
                  <FooterListItem>
                    <FooterLink href="#">Terms</FooterLink>
                  </FooterListItem>
                </FooterList>
              </FooterNavigation>
            </Col>
            <Col col={2}>
              <FooterCopyRight>
                Built my <FooterLink href="#">Seungyeon Kim</FooterLink> for his
                online course.{" "}
                <FooterLink href="#">Advanced CSS and Sass</FooterLink>.
                Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to
                use this webpage for both personal and commerical use, but NOT
                to claim it as your own design. A credit to the original author,
                Jonas Schmedtmann, is of course highly appreciated!
              </FooterCopyRight>
            </Col>
          </Row>
        </Grid>
      </Footer>
    );
  }
}

export default NatoursFooter;
