import { HashRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home.jsx";
import Apropos from "./Pages/About.jsx";
import Fichelogement from "./Pages/Fichelogement.jsx";

// Components
import Layout from "./components/Layout/Layout.jsx";
import Error from "./components/Error/Error.jsx";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/fichelogement/:id" element={<Fichelogement />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
