import styled from "styled-components";
import { media } from "../abstracts";

export const Story = styled.div`
  ${props => props.theme.utilities};
  width: 75%;
  margin: 0 auto;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme.rgba(props.theme.COLOR_WHITE, 0.6)};
  border-radius: 3px;
  padding: 6rem;
  padding-left: 9rem;
  font-size: ${props => props.theme.DEFAULT_FONT_SIZE};
  transform: skewX(-12deg);

  &:hover figcaption {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  &:hover img {
    transform: scale(1);
    filter: blur(3px) brightness(80%);
  }

  ${media.tabPort`
    width: 100%;
    padding: 4rem;
    padding-left: 7rem;
  `};
  ${media.phone`
    width: 100%;
    transform: skewX(0);
  `};
`;

export const StoryShape = styled.figure`
  ${props => props.theme.utilities};
  width: 15rem;
  height: 15rem;
  float: left;
  /*
    So, a circle, and in here we can define the size
    of the circle and the position of the center of the circle.
    How does that work?

    Well the first number we put here is actually the radius
    of the circle, and so if we say 50%, then the radius will
    be half the height and the width of the element and so in
    this case that will be seven point five rem then the
    diameter of the circle will, of course, be 15 and that's
    exactly the size of the shape here, right?

    And then we say 50% 50% because that means that is the
    center of the circle so exactly the center horizontally
    and vertically all right?

    Now I can change this later here in this vector to show
    you the difference, but that is what we want here and
    in order for this to work, the element must actually be
    floated, and that's the case here, right?
  */
  -webkit-shape-outside: circle(50% at 50% 50%);
  shape-outside: circle(50% at 50% 50%);
  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  transform: translateX(-3rem) skewX(12deg);
  position: relative;

  img {
    height: 100%;
    transform: scale(1.4);
    backface-visibility: hidden;
    transition: all 0.5s;
    object-fit: cover;
  }

  ${media.phone`
    transform: translateX(-3rem) skewX(0);
  `};
`;

export const StoryCaption = styled.figcaption`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  color: ${props => props.theme.COLOR_WHITE};
  text-transform: uppercase;
  font-size: 1.7rem;
  text-align: center;
  opacity: 0;
  transition: all 0.5s;
  line-height: 1.45;
  backface-visibility: hidden;
`;

export const StoryText = styled.div`
  ${props => props.theme.utilities};
  transform: skewX(12deg);

  ${media.phone`
    width: 100%;
    transform: skewX(0);
  `};
`;
