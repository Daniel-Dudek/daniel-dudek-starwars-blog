import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import ServicesPage from "../../pages/ServicesPage";
import ContactPage from "../../pages/ContactPage";
import StarWarsPage from "../../pages/StarWarsPage";
import { PlanetPage } from "../../pages/PlanetPage";
import { CharacterPage } from "../../pages/CharacterPage";
import { SpeciePage } from "../../pages/SpeciePage";

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
    element: <PlanetPage />,
    name: "Planet",
    path: "/star-wars/planets/:planetId",
  },
  {
    element: <CharacterPage />,
    name: "Character",
    path: "/star-wars/people/:peopleId",
  },
  {
    element: <SpeciePage />,
    name: "Specie",
    path: "/star-wars/species/:specieId",
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
