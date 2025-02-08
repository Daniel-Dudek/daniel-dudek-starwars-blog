import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FavoritesContext } from "../context/Favorites";
import { getPlanets } from "../../services/api/planets";

import { Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { isEmpty } from "lodash";

export const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const { favorites, addToFavorites, deleteFavorite } =
    useContext(FavoritesContext);
  const navigate = useNavigate();

  useEffect(() => {
    getPlanets()
      .then((data) => setPlanets(data))
      .catch((error) => console.error("Error fetching planets", error));
  }, []);

  const handleFavoriteToggle = (planet) => {
    const isFavorite = favorites.some(
      (fav) => fav.id === planet.uid && fav.type === "planets",
    );
    if (isFavorite) {
      deleteFavorite(planet.uid, "planets");
    } else {
      addToFavorites(planet.uid, planet.name, "planets");
    }
  };

  const handleLearnMore = (planetId) => {
    navigate(`/star-wars/planets/${planetId}`);
  };

  return (
    <>
      <h1 className="my-4 text-center">Star Wars Planets</h1>
      <Row>
        {!isEmpty(planets) &&
          planets.map((planet) => (
            <Col key={planet.uid} md={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/400x200"
                  alt={`${planet.name} poster`}
                />
                <Card.Body>
                  <Card.Title>{planet.name}</Card.Title>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      variant="primary"
                      onClick={() => handleLearnMore(planet.uid)}
                    >
                      Learn More
                    </Button>
                    <FontAwesomeIcon
                      icon={
                        favorites.some(
                          (fav) =>
                            fav.id === planet.uid && fav.type === "planets",
                        )
                          ? solidHeart
                          : regularHeart
                      }
                      size="lg"
                      onClick={() => handleFavoriteToggle(planet)}
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
