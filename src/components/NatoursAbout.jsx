/**
 * @flow
 */

import * as React from "react";
import styled from "styled-components";
import Grid, { Row, Col } from "./Grid";
import { BtnText, Composition, CompositionImg } from "../styles/components";
import {
  Utility,
  HeadingSecondary,
  HeadingTertiary,
  Paragraph
} from "../styles/base";
import { media } from "../styles/abstracts";

const About = styled.section`
  background-color: ${props => props.theme.COLOR_GREY_LIGHT_1};
  padding: 25rem 0;
  margin-top: -20vh;

  ${media.tabPort`
    padding: 18rem 0;
  `};
`;

class NatoursAbout extends React.PureComponent {
  srcset(i) {
    const nomal = require(`../common/img/nat-${i}.jpg`)
    const large = require(`../common/img/nat-${i}-large.jpg`)
  
    return `${nomal} 300w, ${large} 1000w`;
  }

  render(): React.Node {
    return (
      <About>
        <Utility centerText marginBottomBig>
          <HeadingSecondary>
            Exciting tours for adventurous people
          </HeadingSecondary>
        </Utility>
        <Grid>
          <Row>
            <Col col={2}>
              <HeadingTertiary marginBottomSmall>
                You're going to fall in love with nature
              </HeadingTertiary>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                possimus, vero in incidunt itaque culpa ea magnam odio molestiae
                eos esse? Deleniti accusamus fugiat eligendi autem eos id
                eveniet explicabo?
              </Paragraph>

              <HeadingTertiary marginBottomSmall>
                Live adventures like you never have before
              </HeadingTertiary>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur quis saepe ullam libero repellat accusantium
                eligendi doloribus dolores fugiat odio.
              </Paragraph>

              <BtnText href="#">Learn more &rarr;</BtnText>
            </Col>
            <Col col={2}>
              <Composition>
                {Array(3).fill(null).map((img, i) => (
                  <CompositionImg
                    key={i}
                    srcSet={this.srcset(i + 1)}
                    alt={`Photo ${i + 1}`}
                    sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 18.75em"
                  />
                ))}
              </Composition>
            </Col>
          </Row>
        </Grid>
      </About>
    );
  }
}

export default NatoursAbout;
