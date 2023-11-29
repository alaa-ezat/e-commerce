import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart";
import LoginSignup from "./pages/loginsignup";
import Product from "./pages/product";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { ShopContextProvider } from './context/shopcontext';
import Shop from "./pages/shop";
import LatsetCollection from "./pages/latestcollection";
import men_banner from "./components/assets/banner_mens.png";
import women_banner from "./components/assets/banner_women.png";
import kid_banner from "./components/assets/banner_kids.png";
import MenCategory from "./pages/mencategory";
import WomenCategory from "./pages/womencategory";
import KidCategory from "./pages/kidcategory";
function App() {
  return (
    <Router>
       <ShopContextProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<MenCategory banner={men_banner} category='men'/>} />
          <Route path="/womens" element={<WomenCategory banner={women_banner} category='women'/>} />
          <Route path="/kids" element={<KidCategory  banner={kid_banner} category='kid'/>} />
          <Route path="/latest-collection" element={<LatsetCollection />} />
          <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </ShopContextProvider>
      <Footer />
    </Router>
  );
}

export default App;
