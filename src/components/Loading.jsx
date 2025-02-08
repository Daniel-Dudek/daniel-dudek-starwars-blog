import { Container, Spinner } from "react-bootstrap";
import HomePageFooter from "./HomePageFooter";

export const Loading = () => (
  <>
    <Container className="mt-4 text-center">
      <Spinner animation="border" />
      <p>Loading...</p>
    </Container>
    <HomePageFooter />
  </>
);
