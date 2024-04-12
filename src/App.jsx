import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Articule from "./pages/ArticuleDetail/Articule";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articuloDetail" element={<Articule />}>
            <Route path=":id" element={<></>}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
