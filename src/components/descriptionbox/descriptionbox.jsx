import React from "react";
import './descriptionbox.css';

const Descriptionbox = () => {
    return (
        <div className="descriptionbox">
            <div className="describtionbox-navigator">
                <div className="describtionbox-nav-box">Description</div>
                <div className="describtionbox-nav-fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-content">
                <p>Welcome to our trendy and stylish online clothing store, 
                    where fashion meets convenience. Explore our extensive collection of clothing for every occasion, 
                    from casual wear to formal attire. Discover the latest fashion trends, timeless classics,
                    and unique pieces that express your individual style.
                </p>
                <p>
                    At our online clothing boutique, we curate a diverse range of apparel for men, women, 
                    and children, ensuring that everyone can find something that suits their taste.
                    Whether you're searching for the perfect outfit for a special event,
                    comfortable everyday wear, or seasonal essentials, we've got you covered.
                </p>
            </div>
        </div>
    );
}

export default Descriptionbox;
