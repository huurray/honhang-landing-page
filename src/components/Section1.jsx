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
  line-height: 1.4;
  color: #3648fb;
  @media (max-width: 40em) {
    font-size: 3rem;
  }};
`;
const Content = styled.p`
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 1.7;
  color: #999;
  @media (max-width: 40em) {
    font-size: 1.4rem;
  }};
`;
class Section1 extends React.Component {
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
                키워드 검색
                <ColorDot>.</ColorDot>
              </Title>
            </TitleBox>
            <Content>
              키워드를 통한 간단한 동행 검색이 가능합니다. 간편한 동행 찾기를
              위해서 꼭 필요한 동행글 검색기능은 하나의 검색 키워드로 글의 제목,
              내용, 날짜를 동시에 파악하여 검색됩니다!
            </Content>
          </TextBox>
        </ContentBox>
      </Container>
    );
  }
}

export default Section1;
