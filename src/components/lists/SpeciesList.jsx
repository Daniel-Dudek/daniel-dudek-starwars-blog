import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FavouritesContext } from "../context/Favourites";
import { getSpecies } from "../../services/api/species";

import { Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { isEmpty } from "lodash";

export const Species = () => {
  const [species, setSpecies] = useState([]);
  const { favourites, addToFavourites, deleteFavourite } =
    useContext(FavouritesContext);
  const navigate = useNavigate();

  useEffect(() => {
    getSpecies()
      .then((data) => setSpecies(data))
      .catch((error) => console.error("Error fetching species", error));
  }, []);

  const handleFavouriteToggle = (specie) => {
    const isFavourite = favourites.some(
      (fav) => fav.external_id === specie.id && fav.type === "SPECIES",
    );
    if (isFavourite) {
      deleteFavourite(specie.id, "SPECIES");
    } else {
      addToFavourites(specie.id, specie.name, "SPECIES");
    }
  };

  const handleLearnMore = (specieId) => {
    navigate(`/star-wars/species/${specieId}`);
  };

  return (
    <>
      <h1 className="my-4 text-center">Star Wars Species</h1>
      <Row>
        {!isEmpty(species) &&
          species.map((specie) => (
            <Col key={specie.id} md={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/400x200"
                  alt={`${specie.name} poster`}
                />
                <Card.Body>
                  <Card.Title>{specie.name}</Card.Title>
                  <Card.Text>
                    <strong>Description:</strong> {specie.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      variant="primary"
                      onClick={() => handleLearnMore(specie.id)}
                    >
                      Learn More
                    </Button>
                    <FontAwesomeIcon
                      icon={
                        favourites.some(
                          (fav) =>
                            fav.external_id === specie.id &&
                            fav.type === "SPECIES",
                        )
                          ? solidHeart
                          : regularHeart
                      }
                      size="lg"
                      onClick={() => handleFavouriteToggle(specie)}
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
