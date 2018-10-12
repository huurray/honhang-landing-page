import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 5rem;
`;
const ContentBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem 10rem 0 10rem;
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
  @media (max-width: 70em) {
    padding-top: 5rem;
    order: 2
  }};
`;
const Image = styled.img`
  height: 55rem;
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
  padding-left: 5rem;
  @media (max-width: 70em) {
    padding-left: 0;
    order: 1
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
  @media (max-width: 40em) {
    font-size: 3rem;
  }};
`;
const Content = styled.p`
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 3rem;
  color: #999;
  @media (max-width: 40em) {
    font-size: 1.4rem;
  }};
`;
class Section3 extends React.Component {
  render() {
    return (
      <Container>
        <ContentBox>
          <ImageBox>
            <Image src={require('../common/img/search.png')} />
          </ImageBox>
          <TextBox>
            <TitleBox>
              <Title>
                실시간 채팅
                <ColorDot>.</ColorDot>
              </Title>
            </TitleBox>
            <Content>
              동행 글 작성자를 선택하셨다면, 채팅을 통해 말을 걸어보세요! 채팅은
              동행자와 여행에 대해 이야기할 수 있는 기회가 되고, 나에게 맞는
              동행자인지 알려줄거에요! 소중한 인연이 이루어질지 아닐지는 충분한
              대화 후에 결정하세요.
            </Content>
          </TextBox>
        </ContentBox>
      </Container>
    );
  }
}

export default Section3;
