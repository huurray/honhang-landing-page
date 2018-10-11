/**
 * @flow
 */

import React from "react";
import styled from "styled-components";
import Flex, { FlexItem } from "styled-flex-component";
import ReactSVG from "react-svg";
import ReactTooltip from "react-tooltip";

type Props = {
  colors?: Object
};

const ColorBox = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 0.5rem;
  background-color: ${props => (props.backColor ? props.backColor : "#fff")};
`;
const ListText = styled.div`
  font-size: 1.4rem;
  color: #aaa;
  width: 20rem;
`;
const ListItem = styled(FlexItem)`
  border-top: 0.1rem solid #e4e4e4;
`;
const SvgIcon = styled(ReactSVG)`
  color: #aaa;
  cursor: pointer;
  padding: 0.5rem;

  transition: all 0.3s;

  &:hover {
    color: #303030;
  }
`;

class Colors extends React.Component {
  constructor(props) {
    super(props);

    this.copyColor = this.copyColor.bind(this);
  }

  copyColor(colorCode) {
    const copyColorCode = document.createElement("textarea");
    copyColorCode.value = colorCode;
    document.body.appendChild(copyColorCode);
    copyColorCode.focus();
    copyColorCode.select();

    document.execCommand("copy");
    document.body.removeChild(copyColorCode);
  }

  render() {
    const { colors } = this.props;
    return (
      <React.Fragment>
        <h1>Colors</h1>
        <Flex column full>
          {colors &&
            Object.keys(colors).map(name => (
              <ListItem key={name}>
                <Flex justifyStart alignCenter>
                  <FlexItem>
                    <ColorBox backColor={colors[name]} />
                  </FlexItem>
                  <FlexItem>
                    <ListText>{colors[name]}</ListText>
                  </FlexItem>
                  <FlexItem>
                    <ListText>{name}</ListText>
                  </FlexItem>
                  <FlexItem>
                    <SvgIcon
                      data-tip={`${colors[name]} 복사`}
                      onClick={() => this.copyColor(colors[name])}
                      path={require("../common/svg/copy-content.svg")}
                      svgStyle={{
                        width: 20,
                        height: 20,
                        fill: "currentColor"
                      }}
                    />
                    <ReactTooltip
                      place="right"
                      type="dark"
                      effect="solid"
                      globalEventOff="click"
                    />
                  </FlexItem>
                </Flex>
              </ListItem>
            ))}
        </Flex>
      </React.Fragment>
    );
  }
}

export default Colors;
