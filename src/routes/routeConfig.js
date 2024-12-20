import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import ContactPage from "../pages/ContactPage";
import AgendasPage from "../pages/AgendasPage";
import ContactAgendasPage from "../pages/ContactAgendasPage";

export const routeConfig = [
  {
    element: <HomePage />,
    name: "Home",
    path: "/",
  },
  {
    element: <AgendasPage />,
    name: "Agendas",
    path: "/agendas",
  },
  {
    element: <ContactAgendasPage />,
    name: "Contacts",
    path: "/agendas/:slug/contacts",
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
