// WomenCategory.js
import React, { useContext } from "react";
import { ShopContext } from "../context/shopcontext";
import { Link } from "react-router-dom";
import women_banner from "../components/assets/banner_women.png";

function WomenCategory() {
  const { all_product } = useContext(ShopContext);

  const filterProductsByCategory = (category) => {
    return all_product.filter((product) => product.category === category);
  };

  const womenProducts = filterProductsByCategory("women");

  return (
    <div>
      <img className="banner-image" src={women_banner} alt="Women's Banner" />

      <h2>Women's Products</h2>
      <div className="women-products">
        {womenProducts.map((product) => (
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

export default WomenCategory;
