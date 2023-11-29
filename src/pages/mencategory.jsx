// MenCategory.js
import React, { useContext } from "react";
import { ShopContext } from "../context/shopcontext";
import { Link } from "react-router-dom";
import men_banner from "../components/assets/banner_mens.png";
import './css/allcategories.css'

function MenCategory() {
  const { all_product } = useContext(ShopContext);

  const filterProductsByCategory = (category) => {
    return all_product.filter((product) => product.category === category);
  };

  const menProducts = filterProductsByCategory("men");

  return (
    <div>
      <img className="banner-image" src={men_banner} alt="Men's Banner" />

      <h2>Men's Products</h2>
      <div className="men-products">
        {menProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p style={{ color: '#007bff' }}>${product.new_price}</p>
              <p style={{ textDecoration: 'line-through' }}>${product.old_price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenCategory;
