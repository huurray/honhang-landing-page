import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ContentBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem 10rem 0 10rem;

  transition: all 0.3s;
  @media (max-width: 70em) {
    flex-direction: column;
  }};
  @media (max-width: 60em) {
    padding: 3rem 10rem 0 10rem;
  }};
  @media (max-width: 30em) {
    padding: 0 10rem 0 10rem;
  }};
`;
const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s;
  @media (max-width: 70em) {
    padding-top: 5rem;
  }};
  @media (max-width: 30em) {
    padding-bottom: 5rem;
  }};
`;
const Image = styled.img`
  height: 55rem;

  transition: all 0.3s;
  @media (max-width: 40em) {
    height: 45rem;
  }};
  @media (max-width: 30em) {
    height: 35rem;
  }};
`;
const TextBox = styled.div`
  min-width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 5rem;

  transition: all 0.3s;
  @media (max-width: 70em) {
    padding-right: 0;
  }};
  @media (max-width: 40em) {
    min-width: 45rem;
  }};
  @media (max-width: 30em) {
    min-width: 30rem;
  }};
`;
const TitleBox = styled.div`
  display: flex;
`;
const Title = styled.div`
  font-size: 5rem;
  font-weight: 900;
  color: #222;
  padding-bottom: 1rem;

  transition: all 0.3s;
  @media (max-width: 60em) {
    font-size: 4rem;
  }};
  @media (max-width: 40em) {
    font-size: 3rem;
  }};
`;
const ColorDot = styled.span`
  font-size: 5rem;
  font-weight: 900;
  color: #3648fb;

  transition: all 0.3s;
  @media (max-width: 40em) {
    font-size: 3rem;
  }};
`;
const Content = styled.p`
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 3rem;
  color: #999;

  transition: all 0.3s;
  @media (max-width: 40em) {
    font-size: 1.4rem;
  }};
`;
class Section2 extends React.Component {
  render() {
    return (
      <Container>
        <ContentBox>
          <TextBox>
            <TitleBox>
              <Title>
                프로필 열람
                <ColorDot>.</ColorDot>
              </Title>
            </TitleBox>
            <Content>
              동행 글 작성자의 프로필을 열람해서 나만의 동행자를 선택 할 수
              있습니다. 동행자의 프로필에서 사는 곳, 나이, 여행 스타일 등을 은
              나와 맞는 여행자인지 판단하는 좋은 도구가 될 것입니다!
            </Content>
          </TextBox>
          <ImageBox>
            <Image src={require('../common/img/search.png')} />
          </ImageBox>
        </ContentBox>
      </Container>
    );
  }
}

export default Section2;
