import { useContext } from "react";
import { FavoritesContext } from "../components/context/Favorites";
import { NavLink } from "react-router";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const HomePageHeader = () => {
  const { favorites, deleteFavorite } = useContext(FavoritesContext);

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" end>
          <img
            alt=""
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" end>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" end>
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" end>
              Contact
            </Nav.Link>
            {favorites.length > 0 && (
              <NavDropdown
                title="Favorites"
                id="favorites-dropdown"
                align="end"
              >
                {favorites.map((favorite) => (
                  <NavDropdown.Item
                    key={`${favorite.type}${favorite.id}`}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <NavLink
                      to={`/star-wars/${favorite.type}/${favorite.id}`}
                      className="text-decoration-none"
                    >
                      {favorite.name}
                    </NavLink>
                    <Badge
                      bg="danger"
                      className="ms-2"
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteFavorite(favorite.id, favorite.type)}
                    >
                      X
                    </Badge>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomePageHeader;
