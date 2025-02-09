import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FavouritesContext } from "../context/Favourites";
import { getCharacters } from "../../services/api/characters";

import { Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { isEmpty } from "lodash";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const { favourites, addToFavourites, deleteFavourite } =
    useContext(FavouritesContext);
  const navigate = useNavigate();

  useEffect(() => {
    getCharacters()
      .then((data) => setCharacters(data))
      .catch((error) => console.error("Error fetching characters", error));
  }, []);

  const handleFavouriteToggle = (character) => {
    const isFavourite = favourites.some(
      (fav) => fav.external_id === character.id && fav.type === "PEOPLE",
    );
    if (isFavourite) {
      deleteFavourite(character.id, "PEOPLE");
    } else {
      addToFavourites(character.id, character.name, "PEOPLE");
    }
  };

  const handleLearnMore = (characterId) => {
    navigate(`/star-wars/people/${characterId}`);
  };

  return (
    <>
      <h1 className="my-4 text-center">Star Wars Characters</h1>
      <Row>
        {!isEmpty(characters) &&
          characters.map((character) => (
            <Col key={character.id} md={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/400x200"
                  alt={`${character.name} poster`}
                />
                <Card.Body>
                  <Card.Title>{character.name}</Card.Title>
                  <Card.Text>
                    <strong>Description:</strong> {character.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      variant="primary"
                      onClick={() => handleLearnMore(character.id)}
                    >
                      Learn More
                    </Button>
                    <FontAwesomeIcon
                      icon={
                        favourites.some(
                          (fav) =>
                            fav.external_id === character.id &&
                            fav.type === "PEOPLE",
                        )
                          ? solidHeart
                          : regularHeart
                      }
                      size="lg"
                      onClick={() => handleFavouriteToggle(character)}
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
