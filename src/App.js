import { Route, Routes } from "react-router-dom";
import { routeConfig } from "./services/routes/routeConfig";
import HomePageHeader from "./components/HomePageHeader";
import "./App.css";

const App = () => {
  return (
    <>
      <HomePageHeader />
      <Routes>
        {routeConfig.map((route) => (
          <Route key={route.name} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};

export default App;
