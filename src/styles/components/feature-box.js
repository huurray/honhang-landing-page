import styled from "styled-components";
import { media } from "../abstracts";

export const FeatureBox = styled.div`
  ${props => props.theme.utilities};
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;

  ${media.tabPort`
    padding: 2rem;
  `};

  & i {
    font-size: 6rem;
    margin-bottom: 1.5rem;
    display: inline-block;
    background-image: ${props => {
      const { COLOR_PRIMARY_LIGHT, COLOR_PRIMARY_DARK } = props.theme;
      return `linear-gradient(to right, ${COLOR_PRIMARY_LIGHT}, ${COLOR_PRIMARY_DARK})`;
    }};
    -webkit-background-clip: text;
    color: transparent;

    ${media.tabPort`
      margin-bottom: 1rem;
    `};
  }

  &:hover {
    transform: translateY(-1.5rem) scale(1.03);
  }
`;
export const FeatureBoxText = styled.p``;
