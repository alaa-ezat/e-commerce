// KidCategory.js
import React, { useContext } from "react";
import { ShopContext } from "../context/shopcontext";
import { Link } from "react-router-dom";
import kid_banner from "../components/assets/banner_kids.png";

function KidCategory() {
  const { all_product } = useContext(ShopContext);

  const filterProductsByCategory = (category) => {
    return all_product.filter((product) => product.category === category);
  };

  const kidProducts = filterProductsByCategory("kid");

  return (
    <div>
      <img className="banner-image" src={kid_banner} alt="Kids' Banner" />

      <h2>Kids' Products</h2>
      <div className="kids-products">
        {kidProducts.map((product) => (
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

export default KidCategory;
