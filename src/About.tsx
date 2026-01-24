import styled from "styled-components";
import {
  CONTAINER_WIDTH,
  StyledBox,
  StyledH2,
  StyledParagraph,
} from "./helpers/style";
import { StarryNight } from "./StarryNight";

const StyledText = styled.div`
  width: 100%;
  max-width: 574px;
  padding: 36px 48px;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${CONTAINER_WIDTH}px) {
    max-width: 100%;
  }
`;

const COMPANIES: string[] = [
  "CBA",
  "Spatial services NSW",
  "Big W",
  "Rural Fire Service NSW",
  "Revenue NSW",
  "ABC",
  "Centennial Coal",
  "Kablamo",
  "Anditi",
  "Polemos",
];

export function About() {
  const format = new Intl.ListFormat();
  const reactYears = new Date().getFullYear() - 2017;
  return (
    <StyledBox>
      <StarryNight />
      <StyledText>
        <div>
          <StyledH2>ABOUT</StyledH2>
        </div>
        <StyledParagraph>
          I’m a senior frontend/product engineer specialising in React and
          TypeScript, with a strong focus on design systems, UI architecture,
          performance, and interaction quality.
        </StyledParagraph>
        <StyledParagraph>
          I have 10+ years of experience building and scaling web and mobile
          applications, often owning frontend architecture and long-term UI
          decisions. I hold a Master’s in Mathematics & Computer Science and
          bring strong visual instincts from my background as a professional
          photographer.
        </StyledParagraph>
        <StyledParagraph>
          I've delivered production systems used by millions for organisations
          including CBA, NSW Spatial Services, Revenue NSW, Big W, and ABC, and
          I work best in small, high-ownership teams where judgment, quality,
          and maintainability matter.
        </StyledParagraph>
      </StyledText>
    </StyledBox>
  );
}
