import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 70rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;
const TextBox = styled.div`
  width: 80rem;
  height: 100%;
  display: flex;
  padding: 10rem;
  flex-direction: column;
  justify-content: center;
`;
const TitleBox = styled.div`
  display: flex;
`;
const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.7;
  color: #222;
`;
const ColorDot = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.7;
  color: #3648fb;
`;
const Content = styled.p`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.7;
  color: #222;
`;
class Section1 extends React.Component {
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

export default Section1;
