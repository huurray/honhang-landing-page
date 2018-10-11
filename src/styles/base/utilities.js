import styled, { css } from 'styled-components';
import { media } from '../abstracts';

const centerText = css`
  text-align: center !important;
`;
const marginBottomSmall = css`
  margin-bottom: 2rem !important;
`;
const marginBottomMedium = css`
  margin-bottom: 4rem !important;

  ${media.tabPort`
    margin-bottom: 3rem !important;
  `};
`;
const marginBottomBig = css`
  margin-bottom: 8rem !important;

  ${media.tabPort`
    margin-bottom: 5rem !important;
  `};
`;
const marginTopBig = css`
  margin-top: 8rem !important;
`;
const marginTopHuge = css`
  margin-top: 10rem !important;
`;
const line = css`
  border-bottom: 1px solid
    ${props => props.theme.COLOR_GREY_LIGHT_2 || '#fefefe'} !important;
`;

const mb_sm = css`margin-bottom: 2rem;`
const mb_md = css`margin-bottom: 3rem;`
const mb_lg = css`margin-bottom: 4rem;`
const mb_hg = css`margin-bottom: 8rem;`

export const utilities = css`
  ${props => props.centerText && centerText}
  ${props => props.marginBottomSmall && marginBottomSmall}
  ${props => props.marginBottomMedium && marginBottomMedium}
  ${props => props.marginBottomBig && marginBottomBig}
  ${props => props.marginTopBig && marginTopBig}
  ${props => props.marginTopHuge && marginTopHuge}
  ${props => props.line && line}
  ${props => props.mb_sm && mb_sm}
  ${props => props.mb_md && mb_md}
  ${props => props.mb_lg && mb_lg}
  ${props => props.mb_hg && mb_hg}
`;

export const Utility = styled.div`
  ${utilities};
`;
