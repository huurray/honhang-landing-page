import React from 'react';
import styled from 'styled-components';

const logo = require('../common/img/logo.png');
const android = require('../common/img/google-play-badge.png');
const ios = require('../common/img/app-store.png');

export default class extends React.PureComponent {
  render() {
    return (
      <Container>
        <LogoImage src={logo} />
        <Heading>
          다운로드 앱<Dot>.</Dot>
        </Heading>
        <SubHeading>
          함께하면 분명, 좋은 여행이 될거예요. 지금 바로 동행할 친구를 찾아보세요!
        </SubHeading>
        <DownloadBox>
          <a href="https://play.google.com/store/apps/details?id=com.midnightplan.honhang">
            <DownloadImageANDROID src={android} />
          </a>
          <a href="https://itunes.apple.com/us/app/%ED%98%BC%ED%96%89-%ED%98%BC%EC%9E%90-%EC%95%84%EB%8B%8C-%EC%97%AC%ED%96%89/id1436429081?l=ko&ls=1&mt=8">
            <DownloadImageIOS src={ios} />
          </a>
        </DownloadBox>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 15rem;
  padding-bottom: 15rem;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ccc;

  transition: all 0.3s;
  @media (max-width: 50em) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }};
`;
const LogoImage = styled.img`
  height: 10rem;
  border: 1px solid #ddd;
  border-radius: 15px;
  box-shadow: 0px 4px 20px #d6e5ff;
  margin-bottom: 5rem;

  transition: all 0.3s;
  @media (max-width: 50em) {
    height: 6rem;
    margin-bottom: 2rem;
  }};
`;
const Heading = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  color: #333;
  margin-bottom: 2rem;

  transition: all 0.3s;
  @media (max-width: 50em) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }};
`;
const Dot = styled.span`
  color: #0a58d6;
`;
const SubHeading = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
  color: #888;
  margin-bottom: 3rem;

  transition: all 0.3s;
  @media (max-width: 50em) {
    font-size: 1.4rem;
    width: 30rem;
  }};
  @media (max-width: 30em) {
    font-size: 1.4rem;
    width: 25rem;
  }};
`;
const DownloadBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 40em) {
    flex-direction: column;
  }};
`;
const DownloadImageIOS = styled.img`
  height: 5rem;
  &:hover {
    opacity: 0.7;
  }
`;
const DownloadImageANDROID = styled.img`
  height: 7.25rem;
  &:hover {
    opacity: 0.7;
  }
`;
