/**
 * @flow
 */

import * as React from "react";
import styled from "styled-components";
import { colors } from "../styles/abstracts";
import { HeadingSecondary, HeadingTertiary } from "../styles/base";
import { Button } from "../styles/components";

const popupImg1 = require("../common/img/nat-8.jpg");
const popupImg2 = require("../common/img/nat-9.jpg");

const Popup = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${props =>
    props.theme.rgba(props.theme.COLOR_GREY_DARK_3, 0.8)};
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;

  @supports (-webkit-backdrop-filter: blur(10px);) or (backdrop-filter: blur(10px)) {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: ${props =>
    props.theme.rgba(props.theme.COLOR_GREY_DARK_3, 0.1)};
  };

  &:target {
    opacity: 1;
    visibility: visible;
  }

  &:target #content {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;
const PopupContent = styled.div`
  ${props => props.theme.mixins.absoluteCenter};
  background-color: ${props => props.theme.COLOR_WHITE};
  width: 75%;
  border-radius: 3px;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  display: table;
  overflow: hidden;
  opacity: 1;
  transform: translate(-50%, -50%) scale(0.25);
  transition: all 0.5s 0.2s;
`;
const PopupLeft = styled.div`
  width: 33.3333333%;
  display: table-cell;

  img {
    width: 100%;
    display: block;
    margin: 0;
  }
`;
const PopupRight = styled.div`
  width: 66.6666667%;
  display: table-cell;
  vertical-align: middle;
  padding: 2.5rem 5rem;
`;
const PopupText = styled.p`
  font-size: 1.4rem;
  margin-bottom: 4rem;

  column-count: 2;
  column-gap: 4rem; /* 1em = 14px */
  column-rule: 1px solid ${props => props.theme.COLOR_GREY_LIGHT_2};

  -moz-hyphens: auto;
  -ms-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`;
const PopupClose = styled.a`
  &:link,
  &:visited {
    color: ${props => props.theme.COLOR_GREY_DARK};
    position: absolute;
    top: 2.5rem;
    right: 2.5rem;
    font-size: 3rem;
    text-decoration: none;
    display: inline-block;
    transition: all 0.2s;
    line-height: 1;
  }

  &:hover {
    color: ${props => props.theme.COLOR_PRIMARY};
  }
`;

class NatoursPopup extends React.PureComponent {
  render(): React.Node {
    return (
      <Popup {...this.props}>
        <PopupContent id="content">
          <PopupLeft>
            <img src={popupImg1} alt="Tour" />
            <img src={popupImg2} alt="Tour" />
          </PopupLeft>
          <PopupRight>
            <PopupClose href="#tours">&times;</PopupClose>
            <HeadingSecondary marginBottomSmall>
              Start booking now
            </HeadingSecondary>
            <HeadingTertiary marginBottomSmall>
              Important &ndash; Please read these terms before booking
            </HeadingTertiary>
            <PopupText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
              mi ipsum faucibus vitae. Aliquam id diam maecenas ultricies mi
              eget mauris pharetra. Semper auctor neque vitae tempus quam
              pellentesque nec nam aliquam. Justo donec enim diam vulputate ut
              pharetra sit. Sit amet massa vitae tortor condimentum lacinia.
              Mauris sit amet massa vitae tortor. Id diam maecenas ultricies mi
              eget mauris pharetra et. Sapien pellentesque habitant morbi
              tristique senectus et netus. Mattis aliquam faucibus purus in
              massa.
            </PopupText>
            <Button color={colors.COLOR_PRIMARY} fontColor={colors.COLOR_WHITE}>
              Book now
            </Button>
          </PopupRight>
        </PopupContent>
      </Popup>
    );
  }
}

export default NatoursPopup;
