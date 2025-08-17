import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import WhoWeAre from "./pages/whoWeAre/WhoWeAre";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirige de "/" a "/home" */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Ruta principal con Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="/whoWeAre" element={<WhoWeAre />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
