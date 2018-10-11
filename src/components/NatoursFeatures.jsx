/**
 * @flow
 */

import * as React from "react";
import styled from "styled-components";
import Grid, { Row, Col } from "./Grid";
import { FeatureBox, FeatureBoxText } from "../styles/components";
import { HeadingTertiary } from "../styles/base";
import { media } from "../styles/abstracts";

const Features = styled.section`
  padding: 20rem 0;
  ${props => props.theme.mixins.backgroundImageGradient};
  background-size: cover;
  background-position: top;
  position: relative;
  transform: skewY(-7deg);
  margin-top: -10rem;

  & > * {
    transform: skewY(7deg);
  }

  ${media.tabPort`
    padding: 10rem 0;
  `};
`;

const featureBackImg = require("../common/img/nat-4.jpg");

class NatoursFeatures extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          icon: "icon-basic-world",
          title: "Explore the world",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harumrepellendus magnam non ad et numquam ducimus delectus"
        },
        {
          icon: "icon-basic-compass",
          title: "Meet nature",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harumrepellendus magnam non ad et numquam ducimus delectus"
        },
        {
          icon: "icon-basic-map",
          title: "Find your way",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harumrepellendus magnam non ad et numquam ducimus delectus"
        },
        {
          icon: "icon-basic-heart",
          title: "Live a healthier life",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harumrepellendus magnam non ad et numquam ducimus delectus"
        }
      ]
    };
  }
  render(): React.Node {
    return (
      <Features backImg={featureBackImg}>
        <Grid>
          <Row>
            {this.state.data.map((item, i) => (
              <Col key={item.title} col={this.state.data.length}>
                <FeatureBox>
                  <i className={item.icon} />
                  <HeadingTertiary marginBottomSmall>
                    {item.title}
                  </HeadingTertiary>
                  <FeatureBoxText>{item.description}</FeatureBoxText>
                </FeatureBox>
              </Col>
            ))}
          </Row>
        </Grid>
      </Features>
    );
  }
}

export default NatoursFeatures;
