/**
 * @flow
 */

import * as React from "react";
import styled from "styled-components";
import Grid, { Row, Col } from "./Grid";
import Card from "./NatoursCard";
import { Button } from "../styles/components";
import { Utility, HeadingSecondary } from "../styles/base";
import { colors, media } from "../styles/abstracts";

const Tours = styled.section`
  background-color: ${props => props.theme.COLOR_GREY_LIGHT_1};
  padding: 25rem 0 15rem 0;
  margin-top: -10rem;

  ${media.tabPort`
    padding: 20rem 0 10rem 0;
  `};
`;

const card1BackImg = require("../common/img/nat-5.jpg");
const card2BackImg = require("../common/img/nat-6.jpg");
const card3BackImg = require("../common/img/nat-7.jpg");

class NatoursTours extends React.PureComponent {
  render(): React.Node {
    return (
      <Tours {...this.props}>
        <Utility centerText marginBottomBig>
          <HeadingSecondary>Most popular tours</HeadingSecondary>
        </Utility>

        <Grid>
          <Row>
            <Col col={3}>
              <Card
                linearStart={colors.COLOR_SECONDARY_LIGHT}
                linearEnd={colors.COLOR_SECONDARY_DARK}
                url={card1BackImg}
                title="The Sea Explorer"
                details={[
                  "3 day tour",
                  "Up to 30 people",
                  "2 tour guides",
                  "Sleep in cozy hotel",
                  "Difficulty: very easy"
                ]}
                price="$297"
              />
            </Col>
            <Col col={3}>
              <Card
                url={card2BackImg}
                title="The Forest hiker"
                details={[
                  "7 day tour",
                  "Up to 40 people",
                  "6 tour guides",
                  "Sleep in provided tents",
                  "Difficulty: medium"
                ]}
                price="$497"
              />
            </Col>
            <Col col={3}>
              <Card
                linearStart={colors.COLOR_TERIARY_LIGHT}
                linearEnd={colors.COLOR_TERIARY_DARK}
                url={card3BackImg}
                title="The Snow adventurer"
                details={[
                  "5 day tour",
                  "Up to 15 people",
                  "3 tour guides",
                  "Sleep in provided tents",
                  "Difficulty: hard"
                ]}
                price="$897"
              />
            </Col>
          </Row>
        </Grid>
        <Utility centerText marginTopHuge>
          <Button color={colors.COLOR_PRIMARY} fontColor="#fff">
            Discover all tours
          </Button>
        </Utility>
      </Tours>
    );
  }
}

export default NatoursTours;
