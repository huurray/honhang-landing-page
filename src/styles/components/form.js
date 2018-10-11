import styled from "styled-components";
import { media } from "../abstracts";

export const Form = styled.form`
  /*
    Sibling selector

    this is how it works, and this one is actually the adjacent sibling.
    So What is an adjacent sibling? Well, it's just a sibling that comes
    immediately after the element that we select in the first place.
    
    So we fitst select input, and then we select the first sibling, which
    is the label. And so in this case, this works. But if there was some
    other element in-between here let's say here was another div and then
    there was like some button or something so this would totally be possible
    then we could still use a sibling selector but we would have to use
    this one. ~ So this is the general sibling selector so this one works
    if there are more levels in-between but now we can use the adjacent
    sibling + because the sibling is right next to the first element.

    Now one particular thing about the sibling selector is that the sibling
    that we have to select in this case the label, always has to be after
    the first element So the input in this case.

    So again, the label needs to be after the input which is the case here,
    in order to be selected with the sibling selector. so we have to input,
    and then we select the sibling of that element, and a sibling called 'label'.
    if the HTML was written the other way around, so if we had to label before
    the input, this wouldn't work, there would be no way of selecting the
    label here from the input.

    And that's the reason why I wrote the HTML in this order. Alright, so
    when you need to use the sibling selector, then you need to be careful
    about that.
  */
  input:placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
`;
export const FormGroup = styled.div`
  ${props => props.theme.utilities};
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
export const FormInput = styled.input`
  ${props => props.theme.utilities};
  font-size: 1.5rem;
  font-family: inherit;
  color: inherit;
  padding: 1.5rem 2rem;
  border-radius: 2px;
  background-color: ${props => props.theme.rgba(props.theme.COLOR_WHITE, 0.5)};
  border: none;
  border-bottom: 3px solid transparent;
  width: 90%;
  display: block;
  transition: all 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid ${props => props.theme.COLOR_PRIMARY};
  }

  &:focus:invalid {
    border-bottom: 3px solid ${props => props.theme.COLOR_SECONDARY_DARK};
  }

  &::-webkit-input-placeholder {
    color: ${props => props.theme.COLOR_GRAY_DARK_2};
  }

  ${media.tabPort`
    width: 100%;
  `};
`;

export const FormLabel = styled.label`
  ${props => props.theme.utilities};
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 2rem;
  margin-top: 0.7rem;
  display: block;
  transition: all 0.3s;
`;

export const FormRadioGroup = styled.div`
  ${props => props.theme.utilities};
  width: 49%;
  display: inline-block;

  ${media.tabPort`
    width: 100%;
    margin-bottom: 3rem;
  `};
`;

export const FormRadioInput = styled.input`
  ${props => props.theme.utilities};
  display: none;
  &:checked ~ label span::after {
    opacity: 1;
  }
`;

export const FormRadioLabel = styled.label`
  ${props => props.theme.utilities};
  font-size: ${props => props.theme.DEFAULT_FONT_SIZE};
  cursor: pointer;
  position: relative;
  padding-left: 4.2rem;

  span {
    height: 3rem;
    width: 3rem;
    border: 5px solid ${props => props.theme.COLOR_PRIMARY};
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 0;
    top: -0.7rem;

    &::after {
      content: "";
      display: block;
      height: 1.3rem;
      width: 1.3rem;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: ${props => props.theme.COLOR_PRIMARY};
      opacity: 0;
      transition: opacity 0.2s;
    }
  }
`;
