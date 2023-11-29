import React from "react";
import { Link } from "react-router-dom";
import './newcollection.css';
import new_collection from '../assets/new_collections';

const NewCollection = () => {
  return (
    <div className='newCollection'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map(item => (
          <div key={item.id} className="product-card">
          <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.name} />
            <p className="new-price">${item.new_price}</p>
            <p className="old-price">${item.old_price}</p>
            <h2>{item.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewCollection;
