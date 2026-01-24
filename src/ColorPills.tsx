import styled from "styled-components";
import {
  BORDER_RADIUS,
  CONTAINER_WIDTH,
  StyledHeader,
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
  margin: 25px 0;
  box-shadow: 0px 0px 60px 0px rgb(0 0 0 / 20%);
  @media (max-width: ${CONTAINER_WIDTH}px) {
    width: 100%;
    margin: 10px 0;
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
  margin: 25px 0;
  @media (max-width: ${CONTAINER_WIDTH}px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const StyledContainer = styled.div`
  max-width: ${CONTAINER_WIDTH}px;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export function ColorPills() {
  const reactYears = new Date().getFullYear() - 2017;
  return (
    <StyledContainer>
      <StyledPill startColor="#9e78fb" endColor="#e481c6" angle="0deg">
        <StyledHeader>{reactYears + 3} YEARS</StyledHeader>
        Web Experience
      </StyledPill>
      <StyledWhitePill>
        <StyledHeader>
          <StyledRainbowSpan>{reactYears} YEARS</StyledRainbowSpan>
        </StyledHeader>
        React Experience
      </StyledWhitePill>

      <StyledPill startColor="#16a085" endColor="#afeaa6" angle="20deg">
        {/* <StyledPill startColor="#fa709a" endColor="#fee140" angle="90deg"> */}
        <StyledHeader>INTERESTS</StyledHeader>
        Spatial UI · 3D · Visual UI
      </StyledPill>
      <StyledPill startColor="#9e78fb" endColor="#61dafb" angle="60deg">
        <StyledHeader>MASTER OF</StyledHeader>
        Maths & Computer Science
      </StyledPill>
    </StyledContainer>
  );
}
