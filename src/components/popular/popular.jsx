import React from "react";
import { Link } from "react-router-dom";
import './popular.css';
import data_product from '../assets/data';

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map(item => (
          <div key={item.id}>
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.name} />
            </Link>
            <h2>{item.name}</h2>
            <p className="new-price">${item.new_price}</p>
            <p className="old-price">${item.old_price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
