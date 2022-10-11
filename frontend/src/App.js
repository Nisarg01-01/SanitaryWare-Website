import Home from "./Pages/Home";
import About from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Tiles from "./Pages/Tiles";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Header/Nav";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import SingleProduct from "./Pages/Singleproduct";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="page-container">
      <BrowserRouter>
        <Nav />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Tiles" element={<Tiles />} />
            <Route path="/product" element={<Product />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/SingleProduct" element={<SingleProduct />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
