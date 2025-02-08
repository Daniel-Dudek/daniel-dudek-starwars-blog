import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FavoritesContext } from "../context/Favorites";
import { getCharacters } from "../../services/api/characters";

import { Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { isEmpty } from "lodash";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const { favorites, addToFavorites, deleteFavorite } =
    useContext(FavoritesContext);
  const navigate = useNavigate();

  useEffect(() => {
    getCharacters()
      .then((data) => setCharacters(data))
      .catch((error) => console.error("Error fetching characters", error));
  }, []);

  const handleFavoriteToggle = (character) => {
    const isFavorite = favorites.some(
      (fav) => fav.id === character.uid && fav.type === "people",
    );
    if (isFavorite) {
      deleteFavorite(character.uid, "people");
    } else {
      addToFavorites(character.uid, character.name, "people");
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
            <Col key={character.uid} md={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/400x200"
                  alt={`${character.name} poster`}
                />
                <Card.Body>
                  <Card.Title>{character.name}</Card.Title>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      variant="primary"
                      onClick={() => handleLearnMore(character.uid)}
                    >
                      Learn More
                    </Button>
                    <FontAwesomeIcon
                      icon={
                        favorites.some(
                          (fav) =>
                            fav.id === character.uid && fav.type === "people",
                        )
                          ? solidHeart
                          : regularHeart
                      }
                      size="lg"
                      onClick={() => handleFavoriteToggle(character)}
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
