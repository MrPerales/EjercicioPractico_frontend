import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Articule from "./pages/ArticuleDetail/Articule";
import ArticuloDetail from "./components/ArticuloDetail";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articuloDetail/:id" element={<Articule />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
