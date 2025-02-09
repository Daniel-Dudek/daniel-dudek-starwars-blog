import { Container } from "react-bootstrap";
import HomePageFooter from "../components/HomePageFooter";
import { Planets } from "../components/lists/PlanetsList";
import { Characters } from "../components/lists/CharactersList";
import { Species } from "../components/lists/SpeciesList";

const StarWarsPage = () => {
  return (
    <>
      <Container>
        <Planets />
        <Characters />
        <Species />
      </Container>
      <HomePageFooter />
    </>
  );
};

export default StarWarsPage;
