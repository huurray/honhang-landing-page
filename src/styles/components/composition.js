import styled from "styled-components";
import { media } from "../abstracts";

export const Composition = styled.div`
  ${props => props.theme.utilities && props.theme.utilities} position: relative;
  &:hover img:not(:hover) {
    transform: scale(0.95);
  }
`;
export const CompositionImg = styled.img`
  ${props => props.theme.utilities && props.theme.utilities} width: 55%;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  position: absolute;
  z-index: 10;
  transition: transform 0.2s, outline 0.2s, box-shadow 0.2s;
  outline-offset: 2rem;

  ${media.tabPort`
    float: left;
    position: relative;
    width: 33.33333333%;
    box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.2);
  `};
  &:first-child {
    left: 0;
    top: -2rem;

    ${media.tabPort`
      top: 0;
      transform: scale(1.2);
    `};
  }

  &:not(:first-child):not(:last-child) {
    right: 0;
    top: 2rem;

    ${media.tabPort`
      top: -1rem;
      transform: scale(1.3);
      z-index: 100;
    `};
  }

  &:last-child {
    left: 20%;
    top: 10rem;

    ${media.tabPort`
      top: 1rem;
      left: 0;
      transform: scale(1.1);
    `};
  }

  &:hover {
    outline: 1.5rem solid ${props => props.theme.COLOR_PRIMARY};
    transform: scale(1.05) translateY(-0.5rem);
    box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.5);
    z-index: 20;
  }
`;
