import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  height: 30rem;
  background-color: #333;
`;
const FooterBox = styled.div`
  width: 114rem;
  margin: 0 auto;
  padding-top: 8rem;
`;
const Row = styled.div`
  width: 25%;
  float: left;
`;
const LogoImg = styled.img`
  width: 15rem;
  height: auto;
`;
const FooterList = styled.ul`
  list-style: none;
`;
const FooterListItem = styled.li`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.7;
  color: #ccc;
  font-weight: 400 !important;
`;
const FooterTitle = styled.span`
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.7;
  color: white;
`;
const FooterLink = styled.div`
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.7;
  color: white;
  text-decoration: none;
  color: #ccc;
  transition: all 0.2s;
  cursor: pointer;
  &:hover,
  &:active {
    color: #ff6699;
    font-weight: 700;
    transform: rotate(2deg) scale(1.05);
  }
`;
const Footer = () => {
  return (
    <Section>
      <FooterBox>
        <Row>
          <LogoImg src={require('../common/img/app-logo.png')} alt="logo" />
        </Row>
        <Row>
          <FooterList>
            <FooterListItem>
              <FooterTitle>미드나잇플랜 대표 :</FooterTitle> 허준혁
            </FooterListItem>
            <FooterListItem>
              <FooterTitle>사업자등록번호 :</FooterTitle> 000-00-00000
            </FooterListItem>
            <FooterListItem>
              <FooterTitle>주소 :</FooterTitle> 인천광역시 연수구 선학로
              101
            </FooterListItem>
            <FooterListItem>
              2018 &copy;Copyright Honhang.
              <br />
              ALL right reserved
            </FooterListItem>
          </FooterList>
        </Row>
        <Row>
          <FooterList>
            <FooterTitle>CONTACT US</FooterTitle>
            <FooterListItem>010-6495-8078</FooterListItem>
            <FooterListItem>AM 10:00 ~ PM 6:00</FooterListItem>
            <FooterListItem>제휴문의 gjwnsgur91@naver.com</FooterListItem>
            <FooterTitle>BANK INFO</FooterTitle>
            <FooterListItem>
              국민 660402-01-513947 예금주 허준혁
            </FooterListItem>
          </FooterList>
        </Row>
        <Row>
          <FooterList>
            <FooterTitle>INFOMATION</FooterTitle>
            <FooterListItem>
              <FooterLink>회사소개</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink>QnA</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink>서비스 이용약관</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink>개인정보 취급정책</FooterLink>
            </FooterListItem>
          </FooterList>
        </Row>
      </FooterBox>
    </Section>
  );
};

export default Footer;
