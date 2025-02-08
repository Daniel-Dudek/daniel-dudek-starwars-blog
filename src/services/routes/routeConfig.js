import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import ServicesPage from "../../pages/ServicesPage";
import ContactPage from "../../pages/ContactPage";
import StarWarsPage from "../../pages/StarWarsPage";
import { FilmPage } from "../../pages/FilmPage";
import { CharacterPage } from "../../pages/CharacterPage";
import { PlanetPage } from "../../pages/PlanetPage";

export const routeConfig = [
  {
    element: <HomePage />,
    name: "Home",
    path: "/",
  },
  {
    element: <StarWarsPage />,
    name: "Star Wars",
    path: "/star-wars",
  },
  {
    element: <FilmPage />,
    name: "Film",
    path: "/star-wars/films/:filmId",
  },
  {
    element: <CharacterPage />,
    name: "Character",
    path: "/star-wars/people/:peopleId",
  },
  {
    element: <PlanetPage />,
    name: "Planet",
    path: "/star-wars/planets/:planetId",
  },
  {
    element: <AboutPage />,
    name: "About",
    path: "/about",
  },
  {
    element: <ServicesPage />,
    name: "Services",
    path: "/services",
  },
  {
    element: <ContactPage />,
    name: "Contact",
    path: "/contact",
  },
];
