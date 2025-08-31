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
          <Route path="/whoWeAre" element={<WhoWeAre />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
