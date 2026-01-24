import styled from "styled-components";
import { BORDER_RADIUS } from "./helpers/style";
import { Project } from "./types";

const StyledCard = styled.a`
  text-decoration: none;
  color: #333;
  border-radius: ${BORDER_RADIUS}px;
  overflow: hidden;
  margin: 20px 18px;
  width: 300px;
  box-shadow: 0px 0px 60px 0px rgb(0 0 0 / 15%);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 688px) {
    width: 100%;
  }
`;
const StyledImage = styled.img`
  width: 100%;
  border-bottom: 1px solid #eee;
`;
const StyledContainer = styled.div`
  padding: 16px 24px 12px;
`;
const StyledCardTitle = styled.div`
  font-family: "Roboto Condensed";
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`;
const StyledText = styled.p`
  font-size: 14px;
  color: #666;
`;

export const Card = ({
  project: { link, title, info, image },
}: {
  project: Project;
}) => (
  <StyledCard href={link} target="_blank">
    <StyledImage src={require(`./${image}`)} alt={title} />
    <StyledContainer>
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledText>{info}</StyledText>
    </StyledContainer>
  </StyledCard>
);
