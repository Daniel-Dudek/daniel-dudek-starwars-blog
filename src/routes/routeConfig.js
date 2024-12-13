import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import ContactPage from "../pages/ContactPage";

export const routeConfig = [
  {
    element: <HomePage />,
    name: "Home",
    path: "/",
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
