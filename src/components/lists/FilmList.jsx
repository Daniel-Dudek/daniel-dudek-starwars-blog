import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FavoritesContext } from "../context/Favorites";
import { getFilms } from "../../services/api/films";

import { Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { isEmpty } from "lodash";

export const Films = () => {
  const [films, setFilms] = useState([]);
  const { favorites, addToFavorites, deleteFavorite } =
    useContext(FavoritesContext);
  const navigate = useNavigate();

  useEffect(() => {
    getFilms()
      .then((data) => setFilms(data))
      .catch((error) => console.error("Error fetching films", error));
  }, []);

  const handleFavoriteToggle = (film) => {
    const isFavorite = favorites.some(
      (fav) => fav.id === film.uid && fav.type === "films",
    );
    if (isFavorite) {
      deleteFavorite(film.uid, "films");
    } else {
      addToFavorites(film.uid, film.properties.title, "films");
    }
  };

  const handleLearnMore = (filmId) => {
    navigate(`/star-wars/films/${filmId}`);
  };

  return (
    <>
      <h1 className="my-4 text-center">Star Wars Films</h1>
      <Row>
        {!isEmpty(films) &&
          films.map((film) => (
            <Col key={film.uid} md={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/400x200"
                  alt={`${film.properties.title} poster`}
                />
                <Card.Body>
                  <Card.Title>{film.properties.title}</Card.Title>
                  <Card.Text>
                    <strong>Director:</strong> {film.properties.director}
                    <br />
                    <strong>Release Date:</strong>{" "}
                    {film.properties.release_date}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      variant="primary"
                      onClick={() => handleLearnMore(film.uid)}
                    >
                      Learn More
                    </Button>
                    <FontAwesomeIcon
                      icon={
                        favorites.some(
                          (fav) => fav.id === film.uid && fav.type === "films",
                        )
                          ? solidHeart
                          : regularHeart
                      }
                      size="lg"
                      onClick={() => handleFavoriteToggle(film)}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
};
