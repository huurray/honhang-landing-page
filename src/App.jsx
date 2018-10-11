import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/NatoursHeader';
// import Heading from './components/NatoursHeading';
import About from './components/NatoursAbout';
import Features from './components/NatoursFeatures';
import Tours from './components/NatoursTours';
import Stories from './components/NatoursStories';
import Book from './components/NatoursBook';
import Footer from './components/NatoursFooter';
import Navigation from './components/NatoursNavigation';
import Popup from './components/NatoursPopup';
import { ButtonLink } from './styles/components';
import withStyles from './styles';

const Container = styled.div``;

const logo = require('./common/img/logo-white.png');
const headerBackImg = require('./common/img/hero.jpg');
const headerBackImgSmall = require('./common/img/hero-small.jpg');

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
  `,
  TextButtonBox: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    /* background-color: blue; */
    align-items: flex-start;
  `,
  Title: styled.h1`
    font-size: 5rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 2rem;
  `,
  SubTitle: styled.h3`
    font-size: 1.8rem;
    font-weight: 500;
    color: #fff;
    margin-bottom: 8rem;
    line-height: 2.4rem;
  `,
  ImageBox: styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    /* background-color: pink; */
  `,
  Image: styled.img`
    height: 500px;
    object-fit: contain;
  `
};

class App extends Component {
  render() {
    return (
      <Container>
        <Header
          logo={logo}
          backImg={headerBackImgSmall}
          backImgBig={headerBackImg}
          linearStart="#0a58d6"
          linearEnd="#5193ff"
        >
          <Heading.Container>
            <Heading.TextButtonBox>
              <Heading.Title>
                혼자 아닌 여행, 혼행
              </Heading.Title>
              <Heading.SubTitle>
                간편한 동행 여행으로 안전한 혼행하세요.<br/>
                함께하면 분명, 좋은 여행이 될거예요!
              </Heading.SubTitle>
              <ButtonLink href="#tours" fontColor="#0a58d6" animated>
                지금 다운로드
              </ButtonLink>
            </Heading.TextButtonBox>
            <Heading.ImageBox>
              <Heading.Image src={require('./common/img/phone.png')} />
            </Heading.ImageBox>
          </Heading.Container>
        </Header>
      </Container>
    );
  }
}

export default withStyles(App);
