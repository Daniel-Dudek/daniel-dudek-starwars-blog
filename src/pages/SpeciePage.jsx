import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

import { getSpecie } from "../services/api/species";
import { Loading } from "../components/Loading";

import { Card, Container, Row, Col, Button } from "react-bootstrap";
import HomePageFooter from "../components/HomePageFooter";

export const SpeciePage = () => {
  const [specie, setSpecie] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const { specieId } = useParams();

  useEffect(() => {
    getSpecie(specieId)
      .then((specie) => {
        setSpecie(specie);
      })
      .catch((error) => console.error("Error fetching specie data:", error))
      .finally(() => setLoading(false));
  }, [specieId]);

  if (loading) {
    return <Loading />;
  }

  if (!specie) {
    return (
      <Container className="text-center mt-4">
        <h2>Error loading specie data.</h2>
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
                  <h1>{specie.name}</h1>
                </Card.Title>
                <Card.Text className="mt-4" style={{ whiteSpace: "pre-wrap" }}>
                  <strong>Description:</strong>
                  <br />
                  {specie.description}
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
