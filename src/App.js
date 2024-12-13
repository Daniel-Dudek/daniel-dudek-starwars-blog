import { Route, Routes } from "react-router";
import { routeConfig } from "./routes/routeConfig";
import "./App.css";

const App = () => {
  return (
    <Routes>
      {routeConfig.map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default App;
