/**
 * @flow
 */

import * as React from "react";
import styled from "styled-components";
import Grid, { Row } from "./Grid";
import { Utility, HeadingSecondary } from "../styles/base";
import {
  Form,
  FormGroup,
  FormInput,
  FormLabel,
  FormRadioGroup,
  FormRadioInput,
  FormRadioLabel,
  Button
} from "../styles/components";
import { colors, media } from "../styles/abstracts";

const backImg = require("../common/img/nat-10.jpg");

const SectionBook = styled.section`
  ${props => props.theme.mixins.backgroundImageGradient};
  padding: 10rem;

  ${media.tabLand`
    padding: 5rem;
  `};
  ${media.tabPort`
    padding: 3rem;
  `};
  ${media.phone`
    padding:  3rem 0rem;
  `}''
`;

const Book = styled.div`
  background-image: linear-gradient(
      105deg,
      rgba(255, 255, 255, 0.9) 50%,
      transparent 50%
    ),
    url(${backImg});
  background-size: cover;
  background-position: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);

  ${media.tabLand`
    background-image: linear-gradient(
      105deg,
      rgba(255, 255, 255, 0.9) 70%,
      transparent 70%
    ),
    url(${backImg});
  `};
  ${media.tabPort`
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.9) 100%
    ),
    url(${backImg});
  `};
`;

const BookForm = styled.div`
  width: 50%;
  padding: 6rem;

  ${media.tabLand`
    width: 65%;
  `};
  ${media.tabPort`
    width: 100%;
  `};
`;

class NatoursBook extends React.PureComponent {
  render(): React.Node {
    return (
      <SectionBook>
        <Grid>
          <Row>
            <Book>
              <BookForm>
                <Form onSubmit={e => e.defaultPrevented()}>
                  <Utility marginBottomMedium>
                    <HeadingSecondary>Start booking now</HeadingSecondary>
                  </Utility>

                  <FormGroup>
                    <FormInput
                      id="name"
                      type="text"
                      placeholder="Full name"
                      required
                    />
                    <FormLabel htmlFor="name">Full name</FormLabel>
                  </FormGroup>

                  <FormGroup>
                    <FormInput
                      id="email"
                      type="email"
                      placeholder="Email address"
                      required
                    />
                    <FormLabel htmlFor="email">Email address</FormLabel>
                  </FormGroup>

                  <FormGroup marginBottomMedium>
                    <FormRadioGroup>
                      <FormRadioInput id="small" type="radio" name="size" />
                      <FormRadioLabel htmlFor="small">
                        <span />
                        Small tour group
                      </FormRadioLabel>
                    </FormRadioGroup>

                    <FormRadioGroup>
                      <FormRadioInput id="large" type="radio" name="size" />
                      <FormRadioLabel htmlFor="large">
                        <span />
                        Large tour group
                      </FormRadioLabel>
                    </FormRadioGroup>
                  </FormGroup>

                  <FormGroup>
                    <Button
                      color={colors.COLOR_PRIMARY}
                      fontColor={colors.COLOR_WHITE}
                    >
                      Next step &rarr;
                    </Button>
                  </FormGroup>
                </Form>
              </BookForm>
            </Book>
          </Row>
        </Grid>
      </SectionBook>
    );
  }
}

export default NatoursBook;
