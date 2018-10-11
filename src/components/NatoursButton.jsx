/**
 * @flow
 */

import * as React from "react";
import { Button } from "../styles/components";

type Props = {
  children?: any;
};

class NatoursButton extends React.PureComponent<Props> {
  render(): React.Node {
    const { children, ...props } = this.props;
    return (
      <Button {...props}>
        {this.props.children}
      </Button>
    )
  }
}

export default NatoursButton;
