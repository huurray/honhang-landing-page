import React from 'react';
import styled from 'styled-components';
import Header from './NatoursHeader';
import { ButtonLink } from '../styles/components';

const logo = require('../common/img/app-logo.png');

export default class extends React.PureComponent {
  render() {
    return (
      <Header logo={logo} linearStart="#0a58d6" linearEnd="#5193ff">
        <Heading.Container>
          <Heading.TextButtonBox>
            <Heading.Title>
              혼자 아닌 여행, <br /> 혼행
            </Heading.Title>
            <Heading.SubTitle>
              간편한 동행 여행으로 안전한 혼행하세요.
              <br />
              함께하면 분명, 좋은 여행이 될거예요!
            </Heading.SubTitle>
            <ButtonLink
              onClick={this.props.scrollToDomRef}
              fontColor="#0a58d6"
              animated
            >
              지금 다운로드
            </ButtonLink>
          </Heading.TextButtonBox>
          <Heading.ImageBox>
            <Heading.Image src={require('../common/img/1.png')} />
          </Heading.ImageBox>
        </Heading.Container>
      </Header>
    );
  }
}

const BIGGEST = '90em';
const BIG = '65em';
const MIDDLE = '55em';
const SMALL = '49em';

const Heading = {
  Container: styled.div`
    position: absolute;
    /* parent */
    bottom: 0;
    left: 50%;
    /* itself */
    transform: translateX(-50%);

    display: flex;
    width: 70%;
    flex-direction: row;
    justify-content: space-between;
    /* background-color: orangered; */
    transition: all 0.3s;
    @media (min-width: 100em) {
      width: 50%;
    }};
    @media (min-width: ${BIGGEST}) {
      width: 60%;
    }};
    @media (max-width: ${SMALL}) {
      bottom: 50%;
      transform: translate(-50%, -40%);
    }};
    @media (max-width: 40em) {
      transform: translate(-50%, -30%);
    }};
  `,
  TextButtonBox: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;

    transition: all 0.3s;
    @media (max-width: ${SMALL}) {
      align-items: center;
    }};
  `,
  Title: styled.h1`
    font-size: 5.5rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 2rem;

    transition: all 0.3s;
    @media (max-width: ${BIG}) {
      font-size: 4.5rem;
    }};
    @media (max-width: ${MIDDLE}) {
      font-size: 4rem;
    }};
    @media (max-width: ${SMALL}) {
      font-size: 3.5rem;
    }};
  `,
  SubTitle: styled.h3`
    font-size: 2rem;
    font-weight: 500;
    color: #fff;
    margin-bottom: 8rem;
    line-height: 3.5rem;

    transition: all 0.3s;
    @media (max-width: ${BIG}) {
      font-size: 1.7rem;
    }};
    @media (max-width: ${MIDDLE}) {
      font-size: 1.6rem;
    }};
    @media (max-width: ${SMALL}) {
      font-size: 1.4rem;
    }};
  `,
  ImageBox: styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    /* background-color: pink; */
    transition: all 0.3s;
    @media (max-width: ${SMALL}) {
      display: none;
    }};
  `,
  Image: styled.img`
    height: 50rem;
    object-fit: contain;
    transition: all 0.3s;
    @media (max-width: ${BIG}) {
      height: 45rem;
    }};
  `
};
