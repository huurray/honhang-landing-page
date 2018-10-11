import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 70rem;
  display: flex;
  /* margin-top: -25vh; */
`;
const ImageBox = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-color: red;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 35rem;
  height: 45rem;
`;
const TextBox = styled.div`
  flex: 1;
  height: 100%;
  background-color: blue;
`;
const Title = styled.h1`
  ${props => props.theme.typo.h1};
`;
const Content = styled.p`
  ${props => props.theme.typo.p1};
`;
class Section1 extends React.Component {
  render() {
    return (
      <Container>
        <ImageBox>
          <Image src={require('../common/img/search.png')} />
        </ImageBox>
        <TextBox>
          <Title>Keyword Search</Title>
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
