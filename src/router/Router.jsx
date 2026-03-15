import { BrowserRouter, Routes, Route } from "react-router-dom";


import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import ScrollToTop from "../components/Scrolltop";
import ProductDetails from "../pages/ProductDetails";

function MainRouter() {
  return (
    <BrowserRouter>
    <ScrollToTop/>

      <Routes>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products/>} />
             <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="contact" element={<Contact/>} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default  MainRouter;