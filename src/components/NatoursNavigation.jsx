/**
 * @flow
 */

import * as React from "react";
import styled from "styled-components";
import { media } from "../styles/abstracts";

const Navigation = styled.div`
  /* label:hover span::before {
    top: -1rem;
  }
  label:hover span::after {
    top: 1rem;
  } */
`;

const NavigationCheckbox = styled.input`
  display: none;
  &:checked ~ div {
    transform: scale(80);
  }
  &:checked ~ nav {
    opacity: 1;
    width: 100%;
  }
  &:checked + label span {
    background-color: transparent;
  }
  &:checked + label span::before {
    top: 0;
    transform: rotate(135deg);
  }
  &:checked + label span::after {
    top: 0;
    transform: rotate(-135deg);
  }
`;

const NavigationButton = styled.label`
  background-color: ${props => props.theme.COLOR_WHITE};
  height: 7rem;
  width: 7rem;
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  z-index: 2000;
  text-align: center;
  cursor: pointer;

  &:hover span::before {
    top: -1rem;
  }
  &:hover span::after {
    top: 1rem;
  }

  ${media.tabPort`
    top: 4rem;
    right: 4rem;
  `};
  ${media.phone`
    top: 3rem;
    right: 3rem;
  `};
`;

const NavigationIcon = styled.span`
  position: relative;
  margin-top: 3.4rem;

  &,
  &::before,
  &::after {
    width: 3rem;
    height: 2px;
    background-color: ${props => props.theme.COLOR_GREY_DARK_3};
    display: inline-block;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::before {
    top: -0.8rem;
  }
  &::after {
    top: 0.8rem;
  }
`;

const NavigationBackground = styled.div`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background-image: ${props => {
    const { COLOR_PRIMARY_LIGHT, COLOR_PRIMARY_DARK } = props.theme;
    return `radial-gradient(${COLOR_PRIMARY_LIGHT}, ${COLOR_PRIMARY_DARK})`;
  }};
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);

  /* transform: scale(80); */
  ${media.tabPort`
    top: 4.5rem;
    right: 4.5rem;
  `};
  ${media.phone`
    top: 3.5rem;
    right: 3.5rem;
  `};
`;

const NavigationNav = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1500;

  opacity: 0;
  width: 0;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

const NavigationList = styled.ul`
  ${props => props.theme.mixins.absoluteCenter};
  list-style: none;
  text-align: center;
  width: 100%;
`;

const NavigationListItem = styled.li`
  margin: 1rem;
`;

const NavigationLink = styled.a`
  &:link,
  &:visited {
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    padding: 1rem 2rem;
    color: ${props => props.theme.COLOR_WHITE};
    text-decoration: none;
    text-transform: uppercase;
    background-image: ${props =>
      `linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      ${props.theme.COLOR_WHITE} 50%
    )
  `};
    background-size: 220%;
    transition: all 0.4s;

    span {
      margin-right: 1rem;
      display: inline-block;
    }
  }

  &:hover,
  &:active {
    background-position: 100%;
    color: ${props => props.theme.COLOR_PRIMARY};
    transform: translateX(1rem);
  }
`;

class NatoursNavigation extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { href: "#", value: "About Natours" },
        { href: "#", value: "Your benfits" },
        { href: "#", value: "Popular tours" },
        { href: "#", value: "Stories" },
        { href: "#", value: "Book now" }
      ]
    };
  }
  render(): React.Node {
    return (
      <Navigation>
        <NavigationCheckbox id="navi-toggle" type="checkbox" />
        <NavigationButton htmlFor="navi-toggle">
          <NavigationIcon>&nbsp;</NavigationIcon>
        </NavigationButton>
        <NavigationBackground>&nbsp;</NavigationBackground>
        <NavigationNav>
          <NavigationList>
            {this.state.data.map((item, i) => (
              <NavigationListItem key={i}>
                <NavigationLink href={item.href}>
                  <span>{i + 1 > 10 ? i + 1 : `0${i + 1}`}</span>
                  {item.value}
                </NavigationLink>
              </NavigationListItem>
            ))}
          </NavigationList>
        </NavigationNav>
      </Navigation>
    );
  }
}

export default NatoursNavigation;
