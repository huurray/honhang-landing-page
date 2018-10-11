import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 70rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 60em) {
    flex-direction: column;
  }};
`;
const ImageBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 47rem;
  height: 55rem;
  @media (max-width: 60em) {
    transform: scale(0.9);
  }};
  @media (max-width: 30em) {
    transform: scale(0.8);
  }};
`;
const TextBox = styled.div`
  width: 80rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10rem;

  @media (max-width: 40em) {
    width: 48rem;
  }};
`;
const TitleBox = styled.div`
  display: flex;
`;
const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.7;
  color: #222;
  @media (max-width: 40em) {
    font-size: 3rem;
  }};
`;
const ColorDot = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.7;
  color: #3648fb;
  @media (max-width: 40em) {
    font-size: 3rem;
  }};
`;
const Content = styled.p`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.7;
  color: #222;
  @media (max-width: 40em) {
    font-size: 1.5rem;
  }};
`;

class Section3 extends React.Component {
  render() {
    return (
      <Container>
        <ImageBox>
          <Image src={require('../common/img/chat.png')} />
        </ImageBox>
        <TextBox>
          <TitleBox>
            <Title>Chat Now</Title>
            <ColorDot>.</ColorDot>
          </TitleBox>
          <Content>
            동행 글 작성자를 선택하셨다면, 채팅을 통해 말을 걸어보세요! 소중한
            인연이 이루어질지 아닐지는 충분한 대화 후에 결정하세요.
          </Content>
        </TextBox>
      </Container>
    );
  }
}

export default Section3;
