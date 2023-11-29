import React from "react";
import { Link } from "react-router-dom";
import './item.css';

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          <span>New price:</span><br/>{props.new_price}<br/>
        </div>
        <div className="item-price-old">
          <span>Old price:</span><br/>{props.old_price}<br/>
        </div>
      </div>
    </div>
  );
}

export default Item;

