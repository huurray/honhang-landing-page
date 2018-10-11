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
  @media (max-width: 60em) {
    flex-direction: column;
    order: 1;
  }};
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
  @media (max-width: 60em) {
    order: 2;
  }};
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
class Section2 extends React.Component {
  render() {
    return (
      <Container>
        <TextBox>
          <TitleBox>
            <Title>Look Profile</Title>
            <ColorDot>.</ColorDot>
          </TitleBox>
          <Content>
            동행 글 작성자의 프로필을 열람해서 사는 곳, 나이, 여행 스타일 등을
            충분히 보고 나만의 동행자를 선택 할 수 있습니다.
          </Content>
        </TextBox>
        <ImageBox>
          <Image src={require('../common/img/profile.png')} />
        </ImageBox>
      </Container>
    );
  }
}

export default Section2;
