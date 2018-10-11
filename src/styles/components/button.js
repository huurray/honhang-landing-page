import styled from "styled-components";
import { moveInBottom } from "../base";

export const Button = styled.button`
  ${props => props.theme.utilities}
  position: relative;
  background-color: ${props => props.color || "#fff"};
  color: ${props => props.fontColor || "#777"};
  font-weight: 700;
  border: none;
  font-size: ${props => props.theme.DEFAULT_FONT_SIZE};
  border-radius: 10rem;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.2rem 3rem;
  display: inline-block;
  transition: all 0.2s;
  cursor: pointer;
  /* 
    animation-fill-mode: the styles up to zero percent before the animation starts.
  */
  ${props =>
    props.animated && `
      animation: ${moveInBottom} 0.5s ease-out 0.75s;
      animation-fill-mode: backwards;
    `
  }
  &:hover {
    transform: translateY(-3px);
    /* x y offset, blur, color */
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
  }
  &:focus {
    outline: none;
  }
  &:after {
    background-color: ${props => props.color || "#fff"};
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;

    position: absolute;
    top: 0;
    left: 0;

    z-index: -1;
    transition: all 0.4s;
  }
  &:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }
`;

export const ButtonLink = Button.withComponent("a");

export const BtnText = styled.a`
  ${props => props.theme.utilities}

  &:link,
  &:visited {
    font-size: ${props => props.theme.DEFAULT_FONT_SIZE};
    color: ${props => props.theme.COLOR_PRIMARY};
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid ${props => props.theme.COLOR_PRIMARY};
    padding: 5px;
    transition: all 0.2s;
  }

  &:hover {
    background-color: ${props => props.theme.COLOR_PRIMARY};
    color: ${props => props.theme.COLOR_WHITE};
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    /* transform: translateY(-2px); */
  }

  &:active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(0);
  }
`