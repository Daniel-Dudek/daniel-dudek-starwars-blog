import { useContext } from "react";
import { FavouritesContext } from "../components/context/Favourites";
import { NavLink } from "react-router";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const HomePageHeader = () => {
  const { favourites, deleteFavourite } = useContext(FavouritesContext);

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
            {favourites.length > 0 && (
              <NavDropdown
                title="Favourites"
                id="favourites-dropdown"
                align="end"
              >
                {favourites.map((favourite) => (
                  <NavDropdown.Item
                    key={`${favourite.type}${favourite.id}`}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <NavLink
                      to={`/star-wars/${favourite.type}/${favourite.external_id}`}
                      className="text-decoration-none"
                    >
                      {favourite.name}
                    </NavLink>
                    <Badge
                      bg="danger"
                      className="ms-2"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        deleteFavourite(favourite.external_id, favourite.type)
                      }
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
