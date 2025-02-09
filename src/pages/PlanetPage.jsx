import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

import { getPlanet } from "../services/api/planets";
import { Loading } from "../components/Loading";

import { Card, Container, Row, Col, Button } from "react-bootstrap";
import HomePageFooter from "../components/HomePageFooter";

export const PlanetPage = () => {
  const [planet, setPlanet] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const { planetId } = useParams();

  useEffect(() => {
    getPlanet(planetId)
      .then((planet) => {
        setPlanet(planet);
      })
      .catch((error) => console.error("Error fetching planet data:", error))
      .finally(() => setLoading(false));
  }, [planetId]);

  if (loading) {
    return <Loading />;
  }

  if (!planet) {
    return (
      <Container className="text-center mt-4">
        <h2>Error loading planet data.</h2>
        <p>Please try again later.</p>
      </Container>
    );
  }

  return (
    <>
      <Container className="my-4">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card
              style={{
                minHeight: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card.Body style={{ flex: "1 1 auto" }}>
                <Card.Title className="text-center mb-4">
                  <h1>{planet.name}</h1>
                </Card.Title>
                <Card.Text>
                  <strong>Gravity:</strong> {planet.gravity}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button
                  variant="outline-primary"
                  onClick={() => navigate("/star-wars")}
                >
                  Back to star wars list
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      <HomePageFooter />
    </>
  );
};
