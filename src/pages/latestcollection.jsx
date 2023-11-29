import React, { useContext } from "react";
import { ShopContext } from "../context/shopcontext";
import { Link } from "react-router-dom";
import './css/lastcollection.css'

function LatestCollection() {
  const { all_product } = useContext(ShopContext);

  const filterProductsByCategory = (category) => {
    const filteredProducts = all_product.filter((product) => product.category === category);
    return filteredProducts.slice(0, 10);
  };

  const menProducts = filterProductsByCategory("men");
  const womenProducts = filterProductsByCategory("women");
  const kidProducts = filterProductsByCategory("kid");

  return (
    <div className="latest-collection">
      <div className="product-category">
        <h2>Men's Products</h2>
        <div className="products">
          {menProducts.map((product) => (
            <div key={product.id} className="product-cards">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="new-price">${product.new_price}</p>
                <p className="old-price">${product.old_price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="product-category">
        <h2>Women's Products</h2>
        <div className="products">
          {womenProducts.map((product) => (
            <div key={product.id} className="product-cards">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="new-price">${product.new_price}</p>
                <p className="old-price">${product.old_price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="product-category">
        <h2>Kids' Products</h2>
        <div className="products">
          {kidProducts.map((product) => (
            <div key={product.id} className="product-cards">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="new-price">${product.new_price}</p>
                <p className="old-price">${product.old_price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestCollection;
