/**
 * @flow
 */

import * as React from "react";
import {
  HeadingPrimary,
  HeadingPrimaryMain,
  HeadingPrimarySub
} from "../styles/base";

type Props = {
  main: string,
  sub: string
};

class NatoursHeading extends React.PureComponent<Props> {
  render(): React.Node {
    const { main, sub } = this.props;
    return (
      <HeadingPrimary>
        <HeadingPrimaryMain>{main}</HeadingPrimaryMain>
        <HeadingPrimarySub>{sub}</HeadingPrimarySub>
      </HeadingPrimary>
    );
  }
}

export default NatoursHeading;
