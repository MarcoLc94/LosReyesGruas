import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import WhoWeAre from "./pages/whoWeAre/WhoWeAre";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/quienes-somos" element={<WhoWeAre />}></Route>
          <Route path="/servicios" element={<Services />}></Route>
          <Route path="/contacto" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
