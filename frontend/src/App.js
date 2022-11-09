import Home from "./Pages/Home";
import About from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Tiles from "./Pages/Tiles";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Header/Nav";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import SingleProduct from "./Pages/Singleproduct";
import ErrorPage from "./Pages/ErrorPage";
import FeedbackPage from "./Pages/Feedback";
import ProfilePage from "./Pages/ProfilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import "./App.css";

function App() {
  return (
    <div className="page-container">
      <BrowserRouter>
        <Nav />
        <div className="content-wrap">
          <Routes>\
            <Route path="/" element={<Login />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Tiles" element={<Tiles />} />
            <Route path="/product" element={<Product />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/SingleProduct" element={<SingleProduct />} />
            <Route path="/Feedback" element={<FeedbackPage />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
            <Route path="*" element={<ErrorPage/>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
