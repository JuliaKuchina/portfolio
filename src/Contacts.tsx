import styled from "styled-components";
import {
  BORDER_RADIUS,
  CONTAINER_WIDTH,
  StyledRainbowSpan,
} from "./helpers/style";

const StyledPill = styled.div<{
  startColor: string;
  endColor: string;
  angle: string;
}>`
  position: relative;
  border-radius: ${BORDER_RADIUS}px;
  color: white;
  padding: 24px;
  overflow: hidden !important;
  transition: ease 0.3s all;
  background-image: linear-gradient(
    ${({ angle, startColor, endColor }) => `${angle},
    ${startColor} 0%,
    ${endColor} 100%`}
  );
  text-align: center;
  box-shadow: 0px 0px 60px 0px rgb(0 0 0 / 20%);
`;

const StyledPillContainer = styled.a`
  display: block;
  margin: 8px 8px 25px;
  width: calc(50% - 16px);
  text-decoration: none;
  display: block;
  cursor: pointer;
  font-family: "Roboto Condensed";
  font-size: 36px;
  &:first-child {
    width: calc(40% - 16px);
    @media (max-width: ${CONTAINER_WIDTH}px) {
      width: 100%;
      margin: 10px 0;
    }
  }
  &:last-child {
    width: calc(60% - 16px);
    @media (max-width: ${CONTAINER_WIDTH}px) {
      width: 100%;
      margin: 10px 0;
    }
  }
`;

const StyledWhitePill = styled.div`
  position: relative;
  border-radius: ${BORDER_RADIUS}px;
  color: #555;
  padding: 24px;
  overflow: hidden !important;
  transition: ease 0.3s all;
  text-align: center;
  background-color: white;
  box-shadow: 0px 0px 60px 0px rgb(0 0 0 / 20%);
`;

const StyledContainer = styled.div`
  max-width: ${CONTAINER_WIDTH}px;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: ${CONTAINER_WIDTH}px) {
    flex-direction: column;
  }
`;

export function Contacts() {
  return (
    <StyledContainer>
      <StyledPillContainer
        href="https://www.linkedin.com/in/yulia-kuchina/"
        rel="noreferrer"
        target="_blank"
      >
        <StyledPill startColor="#16a085" endColor="#afeaa6" angle="20deg">
          LinkedIn
        </StyledPill>
      </StyledPillContainer>
      <StyledPillContainer
        download
        href="./YuliaKuchinaSoftwareEngineerResume.pdf"
      >
        <StyledWhitePill>
          <StyledRainbowSpan>Download resume</StyledRainbowSpan>
        </StyledWhitePill>
      </StyledPillContainer>
    </StyledContainer>
  );
}
