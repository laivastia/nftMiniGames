import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
function Main() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
