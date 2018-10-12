import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  height: 25rem;
  background-color: #333;
  @media (max-width: 60em) {
    height: 40rem;
  }};
`;
const FooterBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 8rem;
  @media (max-width: 60em) {
    flex-direction: column;
    align-items: center;
    margin-left: 5rem;
  }};
`;
const Row = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 60em) {
    align-items: flex-start;
    margin-bottom: 2rem;
  }};
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
const FooterLink = styled.a`
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
    color: #3648fb;
    font-weight: 700;
    transform: rotate(2deg) scale(1.05);
  }
`;
const Footer = () => {
  return (
    <Section>
      <FooterBox>
        <Row>
          <FooterList>
            <FooterListItem>
              <FooterTitle>대표 :</FooterTitle> 허준혁
            </FooterListItem>
            <FooterListItem>
              <FooterTitle>주소 :</FooterTitle> 인천광역시 연수구 선학로
              101
            </FooterListItem>
            <FooterListItem>
              2018 &copy;Copyright MidnightPlan.
              <br />
              ALL right reserved.
            </FooterListItem>
          </FooterList>
        </Row>
        <Row>
          <FooterList>
            <FooterTitle>CONTACT US</FooterTitle>
            <FooterListItem>010-6495-8078</FooterListItem>
            <FooterListItem>AM 10:00 ~ PM 6:00</FooterListItem>
            <FooterListItem>제휴문의 huurray@gmail.com</FooterListItem>
          </FooterList>
        </Row>
        <Row>
          <FooterList>
            <FooterTitle>INFOMATION</FooterTitle>
            <FooterListItem>
              <FooterLink href="https://loycord.com/privacy">서비스 이용약관</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="https://loycord.com/privacy">개인정보 취급정책</FooterLink>
            </FooterListItem>
          </FooterList>
        </Row>
      </FooterBox>
    </Section>
  );
};

export default Footer;
