import React from "react";
import './offers.css';
import exclusive_images from '../assets/exclusive_image.png'
import { Link } from "react-router-dom";

const Offers = () => {
    return(
        <div className="offers">
            <div className="offers-left">
            <h1>EXCLUSIVE</h1>
            <h1>OFFERS FOR YOU</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <Link to="/latest-collection">
            <button>CHECK NOW</button>
            </Link>
            
            </div>
            <div className="offers-right">
                <img src={exclusive_images} alt="" />

            </div>
        </div>
    )
}
export default Offers 