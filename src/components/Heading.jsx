import React from 'react';
import styled from 'styled-components';
import Header from './NatoursHeader';
import { ButtonLink } from '../styles/components';

const logo = require('../common/img/app-logo.png');

export default class extends React.PureComponent {
  render() {
    return (
      <Header
        logo={logo}
        linearStart="#3648FB"
        linearEnd="#26EFFB"
      >
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
            <ButtonLink href="#tours" fontColor="#0a58d6" animated>
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
    @media (min-width: 90em) {
      width: 50%;
    }};
    @media (max-width: 50em) {
      flex-direction: column;
      bottom: 50%;
      transform: translate(-50%, -50%);
    }};
  `,
  TextButtonBox: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 50em) {
      align-items: center;
    }};
  `,
  Title: styled.h1`
    font-size: 5.5rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 2rem;
    @media (max-width: 60em) {
      font-size: 4.5rem;
    }};
    @media (max-width: 50em) {
      font-size: 4rem;
    }};
    @media (max-width: 40em) {
      font-size: 3.5rem;
    }};
  `,
  SubTitle: styled.h3`
    font-size: 2rem;
    font-weight: 500;
    color: #fff;
    margin-bottom: 8rem;
    line-height: 2.4rem;
    @media (max-width: 60em) {
      font-size: 1.7rem;
    }};
    @media (max-width: 50em) {
      font-size: 1.6rem;
    }};
    @media (max-width: 40em) {
      font-size: 1.4rem;
    }};
  `,
  ImageBox: styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    /* background-color: pink; */
    @media (max-width: 50em) {
      display: none;
    }};
  `,
  Image: styled.img`
    height: 500px;
    object-fit: contain;
  `
};