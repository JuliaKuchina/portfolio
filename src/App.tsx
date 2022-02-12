import styled from "styled-components";
import { Welcome } from "./Welcome";
import { PROJECTS } from "./constants/projects";
import { Card } from "./Card";
import { About } from "./About";
import { ColorPills } from "./ColorPills";
import { CONTAINER_WIDTH, StyledH2 } from "./constants/style";
import { InspiredBy } from "./InspiredBy";

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

function App() {
  return (
    <div>
      <Welcome />
      <ColorPills />
      <About />
      <StyledAppContainer>
        <StyledH2>MY PROJECTS</StyledH2>
        <CardFlexContainer>
          {PROJECTS.map((project) => (
            <Card key={project.title} project={project} />
          ))}
        </CardFlexContainer>
      </StyledAppContainer>
      <InspiredBy />
    </div>
  );
}

export default App;
