/**
 * @flow
 */

import * as React from "react";
import {
  Card,
  CardSide,
  CardPicture,
  CardHeading,
  CardDetails,
  CardCta,
  CardPriceBox,
  CardPriceOnly,
  CardPriceValue,
  ButtonLink
} from "../styles/components";

type Props = {
  linearStart?: string,
  linearEnd?: string,
  url: string,
  title: string,
  details: string
};

class NatoursCard extends React.PureComponent<Props> {
  render(): React.Node {
    const { linearStart, linearEnd, url, title, details, price } = this.props;
    return (
      <Card>
        {/* FRONT */}
        <CardSide linearStart={linearStart} linearEnd={linearEnd}>
          <CardPicture
            backImg={url}
            linearStart={linearStart}
            linearEnd={linearEnd}
          >
            &nbsp;
          </CardPicture>
          <CardHeading linearStart={linearStart} linearEnd={linearEnd}>
            <span>{title}</span>
          </CardHeading>
          <CardDetails>
            <ul>{details.map((detail, i) => <li key={i}>{detail}</li>)}</ul>
          </CardDetails>
        </CardSide>
        {/* BACK */}
        <CardSide linearStart={linearStart} linearEnd={linearEnd}>
          <CardCta>
            <CardPriceBox>
              <CardPriceOnly>Only</CardPriceOnly>
              <CardPriceValue>{price}</CardPriceValue>
            </CardPriceBox>
            <ButtonLink href="#popup">Book now!</ButtonLink>
          </CardCta>
        </CardSide>
      </Card>
    );
  }
}

export default NatoursCard;
