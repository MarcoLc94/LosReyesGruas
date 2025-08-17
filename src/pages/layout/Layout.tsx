import { Outlet } from "react-router-dom";
import "./Layout.css";
import { ThemeProvider } from "../../context/ThemeProvider";
import Navbar from "../../components/nvabar/Navbar";
import Footer from "../../components/footer/Footer";

const layout = () => {
  return (
    <div className="layout-container">
      <ThemeProvider>
        <Navbar></Navbar>
        <main className="main-container">
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </ThemeProvider>
    </div>
  );
};

export default layout;
