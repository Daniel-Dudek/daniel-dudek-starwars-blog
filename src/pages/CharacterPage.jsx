import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

import { getCharacter } from "../services/api/characters";
import { Loading } from "../components/Loading";

import { Card, Container, Row, Col, Button } from "react-bootstrap";
import HomePageFooter from "../components/HomePageFooter";

export const CharacterPage = () => {
  const [people, setPeople] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const { peopleId } = useParams();

  useEffect(() => {
    getCharacter(peopleId)
      .then((people) => {
        setPeople(people);
      })
      .catch((error) => console.error("Error fetching people data:", error))
      .finally(() => setLoading(false));
  }, [peopleId]);

  if (loading) {
    return <Loading />;
  }

  if (!people) {
    return (
      <Container className="text-center mt-4">
        <h2>Error loading people data.</h2>
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
                  <h1>{people.properties.name}</h1>
                </Card.Title>
                <Card.Text>
                  <strong>Hair color:</strong> {people.properties.hair_color}
                  <br />
                  <strong>Skin color:</strong> {people.properties.skin_color}
                  <br />
                  <strong>Eyes color:</strong> {people.properties.eye_color}
                </Card.Text>
                <Card.Text className="mt-4" style={{ whiteSpace: "pre-wrap" }}>
                  <strong>Description:</strong>
                  <br />
                  {people.description}
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
