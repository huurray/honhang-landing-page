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
        <ImageBox>
          <Image src={require('../common/img/search.png')} />
        </ImageBox>
        <TextBox>
          <TitleBox>
            <Title>Keyword Search</Title>
            <ColorDot>.</ColorDot>
          </TitleBox>
          <Content>
            키워드를 통한 간단한 동행 검색이 가능합니다. 하나의 검색 키워드로
            글의 제목, 내용, 날짜를 동시에 파악하여 검색됩니다!
          </Content>
        </TextBox>
      </Container>
    );
  }
}

export default Section1;
