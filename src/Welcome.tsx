import styled from "styled-components";
import { TechChart } from "./Chart";
import {
  BORDER_RADIUS,
  CONTAINER_WIDTH,
  StyledBox,
  StyledH2,
  StyledParagraph,
  StyledRainbowSpan,
  StyledSubHeader,
} from "./helpers/style";

const StyledContainer = styled.div`
  padding: 50px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${CONTAINER_WIDTH}px) {
    max-width: 100%;
    padding: 50px 24px;
  }
`;

const StyledLink = styled.a`
  color: #555;
  background: white;
  font-size: 16px;
  padding: 16px;
  text-decoration: none;
  border-radius: ${BORDER_RADIUS * 2}px;
  display: block;
  cursor: pointer;
`;

const StyledLinkContainer = styled.div`
  padding: 3px;
  text-align: center;
  width: 205px;
  text-decoration: none;
  margin: 16px 0 8px;
  border-radius: ${BORDER_RADIUS * 2.5}px;
  background-image: linear-gradient(
    to right,
    #b8cbb8 0%,
    #b8cbb8 0%,
    #b465da 0%,
    #cf6cc9 33%,
    #ee609c 66%,
    #ee609c 100%
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export function Welcome() {
  return (
    <StyledBox>
      <StyledContainer>
        <div>
          <StyledH2>YULIA KUCHINA</StyledH2>
          <StyledSubHeader>Senior Frontend/Product Engineer</StyledSubHeader>
          <StyledParagraph>
            I build scalable design systems and high-performance user
            experiences for products used by millions, with a focus on
            interaction quality, restraint, and long-term maintainability.
          </StyledParagraph>
          <StyledParagraph>
            Contact info is in my resume. <br />
            P.S. Yes, feel free to drag and move the bubbles around :)
          </StyledParagraph>
        </div>
        <StyledLinkContainer>
          <StyledLink download href="./YuliaKuchinaSoftwareEngineerResume.pdf">
            <StyledRainbowSpan>Download resume</StyledRainbowSpan>
          </StyledLink>
        </StyledLinkContainer>
      </StyledContainer>
      <TechChart />
    </StyledBox>
  );
}
