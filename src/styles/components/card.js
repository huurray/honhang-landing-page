import styled from "styled-components";
import { media } from "../abstracts";

export const Card = styled.div`
  ${props => props.theme.utilities};
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 52rem;

  &:hover > :first-child {
    transform: rotateY(-180deg);
  }

  &:hover > :last-child {
    transform: rotateY(0);
  }

  ${media.tabPort`
    height: auto;

    &:hover > :first-child {
      transform: rotateY(0);
    }
  `};
`;

export const CardSide = styled.div`
  ${props => props.theme.utilities};
  height: 52rem;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);

  &:first-child {
    background-color: ${props => props.theme.COLOR_WHITE};
  }

  &:last-child {
    ${props => props.theme.mixins.backgroundImageGradient};
    transform: rotateY(180deg);
  }

  ${media.tabPort`
    height: auto;
    position: relative;
    border-radius: 3px;
    background-color: ${props => props.theme.COLOR_WHITE};
    box-shadow: none;

    &:last-child {
      ${media.tabPort`
        transform: rotateY(0);
        clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%);
        margin-top: -3rem;
      `};
    }
  `};
`;

export const CardPicture = styled.div`
  ${props => props.theme.utilities};
  background-size: cover;
  ${props => props.theme.mixins.backgroundImageGradient};
  height: 23rem;
  background-blend-mode: screen;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

export const CardHeading = styled.h4`
  ${props => props.theme.utilities};
  font-size: 2.8rem;
  font-weight: 300;
  text-transform: uppercase;
  text-align: right;
  color: ${props => props.theme.COLOR_WHITE};
  position: absolute;
  top: 12rem;
  right: 2rem;
  width: 75%;

  span {
    padding: 1rem 1.6rem;
    line-height: 1.6;
    box-decoration-break: clone;
    ${props => props.theme.mixins.backgroundImageGradient};
  }
`;

export const CardDetails = styled.div`
  padding: 3rem;

  ul {
    list-style: none;
    width: 80%;
    margin: 0 auto;

    li {
      text-align: center;
      font-size: 1.5rem;
      padding: 1rem;

      &:not(:last-child) {
        border-bottom: 1px solid #eee;
      }
    }
  }

  ${media.tabPort`
    padding: 1rem 3rem 3rem 3rem;
  `};
`;

export const CardCta = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  text-align: center;

  ${media.tabPort`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    transform: translate(0);
    padding: 7rem 4rem 4rem 4rem;
  `};
`;

export const CardPriceBox = styled.div`
  text-align: center;
  color: ${props => props.theme.COLOR_WHITE};
  margin-bottom: 8rem;

  ${media.tabPort`
    margin-bottom: 3rem;
  `};
`;

export const CardPriceOnly = styled.p`
  font-size: 1.4rem;
  text-transform: uppercase;
`;

export const CardPriceValue = styled.p`
  font-size: 6rem;
  font-weight: 100;

  ${media.tabPort`
    font-size: 4rem;
  `};
`;
