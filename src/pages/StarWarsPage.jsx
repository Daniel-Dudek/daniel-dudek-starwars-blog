import { Container } from "react-bootstrap";
import HomePageFooter from "../components/HomePageFooter";
import { Films } from "../components/lists/FilmList";
import { Characters } from "../components/lists/CharactersList";
import { Planets } from "../components/lists/PlanetsList";

const StarWarsPage = () => {
  return (
    <>
      <Container>
        <Films />
        <Characters />
        <Planets />
      </Container>
      <HomePageFooter />
    </>
  );
};

export default StarWarsPage;
