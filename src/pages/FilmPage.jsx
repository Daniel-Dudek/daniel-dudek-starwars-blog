import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

import { getFilm } from "../services/api/films";
import { Loading } from "../components/Loading";

import { Card, Container, Row, Col, Button } from "react-bootstrap";
import HomePageFooter from "../components/HomePageFooter";

export const FilmPage = () => {
  const [film, setFilm] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const { filmId } = useParams();

  useEffect(() => {
    getFilm(filmId)
      .then((film) => {
        setFilm(film);
      })
      .catch((error) => console.error("Error fetching film data:", error))
      .finally(() => setLoading(false));
  }, [filmId]);

  if (loading) {
    return <Loading />;
  }

  if (!film) {
    return (
      <Container className="text-center mt-4">
        <h2>Error loading film data.</h2>
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
                  <h1>{film.properties.title}</h1>
                </Card.Title>
                <Card.Text>
                  <strong>Director:</strong> {film.properties.director}
                  <br />
                  <strong>Producer:</strong> {film.properties.producer}
                  <br />
                  <strong>Release Date:</strong> {film.properties.release_date}
                </Card.Text>
                <Card.Text className="mt-4" style={{ whiteSpace: "pre-wrap" }}>
                  <strong>Opening Crawl:</strong>
                  <br />
                  {film.properties.opening_crawl}
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
