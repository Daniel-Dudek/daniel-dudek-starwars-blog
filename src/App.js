import { Route, Routes } from "react-router-dom";
import { routeConfig } from "./routes/routeConfig";
import "./App.css";

const App = () => {
  return (
    <Routes>
      {routeConfig.map((route) => (
        <Route key={route.name} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default App;
