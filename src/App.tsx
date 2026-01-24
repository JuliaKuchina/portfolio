import styled from "styled-components";
import { Welcome } from "./Welcome";
import { PROJECTS, PROJECTS2 } from "./helpers/projects";
import { Card } from "./Card";
import { About } from "./About";
import { ColorPills } from "./ColorPills";
import {
  CONTAINER_WIDTH,
  StyledH2,
  StyledH3,
  StyledSubHeader,
} from "./helpers/style";
import { InspiredBy } from "./InspiredBy";
import { Contacts } from "./Contacts";

const StyledAppContainer = styled.div`
  max-width: ${CONTAINER_WIDTH}px;
  margin: 100px auto 25px;
  text-align: center;
`;

const CardFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 25px;
  text-align: left;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 80px auto 0;
  text-align: center;
  max-width: 700px;
`;

function App() {
  return (
    <div>
      <Welcome />
      <ColorPills />
      <About />
      <StyledAppContainer>
        <StyledH2>Selected Work</StyledH2>
        <StyledSubHeader>
          A selection of projects focused on UI systems, interaction, and
          performance.
        </StyledSubHeader>
        <CardFlexContainer>
          {PROJECTS.map((project) => (
            <Card key={project.title} project={project} />
          ))}
        </CardFlexContainer>
        <StyledContainer>
          <StyledH3>Early Explorations</StyledH3>
          <StyledSubHeader>
            A selection of small projects created early in my career to explore
            UI, interaction, and visual systems.
          </StyledSubHeader>
        </StyledContainer>

        <CardFlexContainer>
          {PROJECTS2.map((project) => (
            <Card key={project.title} project={project} />
          ))}
        </CardFlexContainer>
      </StyledAppContainer>
      <Contacts />
      <InspiredBy />
    </div>
  );
}

export default App;
