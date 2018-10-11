/**
 * @flow
 */

import * as React from "react";
import styled from "styled-components";
import Grid, { Row } from "./Grid";
import {
  BtnText,
  Story,
  StoryShape,
  StoryText,
  StoryCaption,
  BgVideo
} from "../styles/components";
import {
  Utility,
  HeadingSecondary,
  HeadingTertiary,
  Paragraph
} from "../styles/base";
import { media } from "../styles/abstracts";

const Stories = styled.section`
  padding: 15rem 0;
  position: relative;

  ${media.tabPort`
    padding: 10rem 0;
  `};
`;

const storyImg = require("../common/img/nat-8.jpg");
const storyImg2 = require("../common/img/nat-9.jpg");
const storyVideo = require("../common/img/video.mp4");

class NatoursStories extends React.PureComponent {
  render(): React.Node {
    return (
      <Stories>
        <BgVideo>
          <video autoPlay muted loop>
            <source src={storyVideo} type="video/mp4" />
            {/* <source src={storyWebm} type="video/webm" /> */}
            Your browser is not supported!
          </video>
        </BgVideo>
        <Utility centerText marginBottomBig>
          <HeadingSecondary>We make people genuinely happy</HeadingSecondary>
        </Utility>

        <Grid>
          <Row>
            <Story>
              <StoryShape>
                <img src={storyImg} alt="Person on a tour" />
                <StoryCaption>Mary Smith</StoryCaption>
              </StoryShape>
              <StoryText>
                <HeadingTertiary marginBottomSmall>
                  I had the best week ever with my family
                </HeadingTertiary>
                <Paragraph>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum, itaque ipsa repellat architecto soluta aliquid
                  dignissimos explicabo vitae eos perspiciatis, veniam,
                  cupiditate maiores nesciunt minima. Quisquam aliquid esse sed
                  modi. itaque ipsa repellat architecto soluta aliquid
                  dignissimos explicabo vitae eos perspiciatis, veniam
                  dignissimos explicabo vitae eos perspiciatis, veniam
                </Paragraph>
              </StoryText>
            </Story>
          </Row>

          <Row>
            <Story>
              <StoryShape>
                <img src={storyImg2} alt="Person on a tour" />
                <StoryCaption>Jack Wilson</StoryCaption>
              </StoryShape>
              <StoryText>
                <HeadingTertiary marginBottomSmall>
                  WOW! My life is completely different now
                </HeadingTertiary>
                <Paragraph>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum, itaque ipsa repellat architecto soluta aliquid
                  dignissimos explicabo vitae eos perspiciatis, veniam,
                  cupiditate maiores nesciunt minima. Quisquam aliquid esse sed
                  modi. itaque ipsa repellat architecto soluta aliquid
                  dignissimos explicabo vitae eos perspiciatis, veniam
                  dignissimos explicabo vitae eos perspiciatis, veniam
                </Paragraph>
              </StoryText>
            </Story>
          </Row>
        </Grid>

        <Utility centerText marginTopHuge>
          <BtnText href="#">Read all stories &rarr;</BtnText>
        </Utility>
      </Stories>
    );
  }
}

export default NatoursStories;
