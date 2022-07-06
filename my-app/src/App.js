import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import Main from "./pages/Main";
import Gallery from "./pages/Gallery";
import Story from "./pages/Story";
import RoadMap from "./pages/roadMap";
import Utility from "./pages/utility";
import Faq from "./pages/Faq";
import Tos from "./pages/Tos";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/story" element={<Story />} />
        <Route path="/roadmap" element={<RoadMap />} />
        <Route path="/utility" element={<Utility />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/tos" element={<Tos />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
