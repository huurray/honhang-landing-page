/**
 * @flow
 */

import * as React from "react";
import styled from "styled-components";
import { media } from "../styles/abstracts";

const Block = styled.section`
  font-size: 1.6rem;
`;

export const Row = styled.div`
  /*
    so what max means is that if we have enough available space,
    then it will have the width that we specified but if there
    is not enough width, so basically if the viewport is smaller
    that width that we specified here, so in this case, if the
    viewport is samller than 114rem, then it will simply fill
    100% of the available space that is has.
  */
  max-width: ${props => props.theme.GRID_WIDTH};

  /*
    we want to do it to always center this row in the viewport.
    And probably you already know the trick, right?
    So what we do is margin, zero, and auto.
    That's the trick that everyone uses to center block elements
    inside of another block element. So we say that the margin on
    top and of the bottom is zero, and left and right is auto.
    why does that actually work? When we say that we want the margin
    to be automatically, this means that the browser, rendering
    the page, will automatically figure out the margin that we want
    on the left and on the right side, right?
    And since it's both set to auto, it's means that left and right
    will be the same, and CSS will automatically calculate the left
    margin and right margin, and they will be the same, and so of
    course, the element will be centered, that's the simple logic
    behind this.
  */
  margin: 0 auto;

  /*
    Now what the not does here is that it simply does the opposite,
    so we select everything except the last child.
  */
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.GUTTER_VERTICAL};

    ${media.tabPort`
      margin-bottom: ${props => props.theme.GUTTER_VERTICAL_SMALL};
    `};
  }

  ${media.tabPort`
    max-width: 50rem;
    padding: 0 3rem;
  `};

  ${props => props.theme.mixins.clearfix};
`;

export const Col = styled.div`
  float: left;

  &:not(:last-child) {
    margin-right: ${props => props.theme.GUTTER_HORIZONTAL};

    ${media.tabPort`
      margin-right: 0;
      margin-bottom: ${props => props.theme.GUTTER_VERTICAL_SMALL}
    `};
  }

  ${media.tabPort`
    width: 100% !important;
  `};
  /*
    calc In here, you can do mathematical operations, and you
    can actually mix units in here, That's really important.
    It's huge benefit.
  */
  ${props => `
      width: calc(${props.row || 1} * (100% - ${(props.col || 1) - 1} * ${
    props.theme.GUTTER_HORIZONTAL
  }) / ${props.col || 1} + ${(props.row || 1) - 1} * ${
    props.theme.GUTTER_HORIZONTAL
  });
  `};
`;

class Grid extends React.PureComponent {
  render() {
    const { children, ...props } = this.props;
    return <Block {...props}>{children}</Block>;
  }
}

export default Grid;
