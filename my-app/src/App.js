import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faq from "./pages/faq";
import Gallery from "./pages/Gallery";
import Main from "./pages/Main";
import Nav from "./pages/Nav";
import RoadMap from "./pages/roadMap";
import Story from "./pages/Story";
import Tos from "./pages/Tos";
import Utility from "./pages/utility";

function App() {
  return (
    <BrowserRouter>
      <Nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/story" element={<Story />} />
          <Route path="/roadmap" element={<RoadMap />} />
          <Route path="/utility" element={<Utility />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/tos" element={<Tos />} />
        </Routes>
      </Nav>
    </BrowserRouter>
  );
}

export default App;
