import React from "react";
import "./hero.css";
import hero_image from '../assets/hero_image.png';
import { Link } from "react-router-dom";



const Hero = () => {
    
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>Discover Our Exclusive Arrivals</h2>
                <div>
                    <div className="hand-hand-icon">
                        <p>Explore the Latest</p>
                    </div>
                    <p>Exquisite Collections</p>
                    <p>for All Tastes</p>
                </div>
                <div className="hero-latest">
                <Link to="/latest-collection">
                    <button>View Our Latest Collection</button></Link> 
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />

            </div>
        </div>
    )
}
export default Hero