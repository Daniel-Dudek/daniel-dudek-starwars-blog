import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FavouritesContext } from "../context/Favourites";
import { getPlanets } from "../../services/api/planets";

import { Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { isEmpty } from "lodash";

export const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const { favourites, addToFavourites, deleteFavourite } =
    useContext(FavouritesContext);
  const navigate = useNavigate();

  useEffect(() => {
    getPlanets()
      .then((data) => setPlanets(data))
      .catch((error) => console.error("Error fetching planets", error));
  }, []);

  const handleFavouriteToggle = (planet) => {
    const isFavourite = favourites.some(
      (fav) => fav.external_id === planet.id && fav.type === "PLANETS",
    );
    if (isFavourite) {
      deleteFavourite(planet.id, "PLANETS");
    } else {
      addToFavourites(planet.id, planet.name, "PLANETS");
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
            <Col key={planet.id} md={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/400x200"
                  alt={`${planet.name} poster`}
                />
                <Card.Body>
                  <Card.Title>{planet.name}</Card.Title>
                  <Card.Text>
                    <strong>Gravity:</strong> {planet.gravity}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      variant="primary"
                      onClick={() => handleLearnMore(planet.id)}
                    >
                      Learn More
                    </Button>
                    <FontAwesomeIcon
                      icon={
                        favourites.some(
                          (fav) =>
                            fav.external_id === planet.id &&
                            fav.type === "PLANETS",
                        )
                          ? solidHeart
                          : regularHeart
                      }
                      size="lg"
                      onClick={() => handleFavouriteToggle(planet)}
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
