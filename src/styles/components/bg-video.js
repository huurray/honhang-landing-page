import styled from "styled-components";

export const BgVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.15;
  overflow: hidden;

  video {
    height: 100%;
    width: 100%;
    /*
      this is very similar to having background size set to cover
      where it tries to cover the entire element with the image.
      we can make that image cover the parent element.

      And we could actually use other values here instead of cover
    */
    object-fit: cover;
  }
`;
