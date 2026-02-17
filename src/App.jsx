import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import RecipesDetails from "./Component/RecipesDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<RecipesDetails />} />
    </Routes>
  );
}

export default App;
