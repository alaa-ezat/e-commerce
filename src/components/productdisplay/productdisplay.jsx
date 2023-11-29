import React, { useContext , useEffect } from "react";
import './productdisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from "../../context/shopcontext";



const Productdispaly = (props) => {
    const { product } = props;
    const { addToCart, gettotalcartitems } = useContext(ShopContext);

    useEffect(() => {
        console.log('Productdispaly component re-rendered with cartItems change');
    }, [gettotalcartitems]);

    const handleAddToCart = () => {
        addToCart(product.id, 1);
    };


    return(
        <div className="productdisplay">

<div className="productdisplay-left">
                <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt=""/>
                </div>

            </div>

            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                    <div className="productdisplay-right-description">
                    The green pullover is a stylish and comfortable clothing item that features a vibrant shade of green,
                     making it a refreshing addition to any wardrobe. Crafted with high-quality materials, 
                     it provides both warmth and fashion,
                     making it an ideal choice for a cozy and trendy outfit.
                    </div>
                    <div className="productdisplay-right-size">
                        Sizes:  
                        <div>S </div> 
                        <div>M </div> 
                        <div>L </div> 
                        <div>XL </div> 
                    </div>


                </div>


                <button onClick={handleAddToCart}>Add to Cart</button>
                <p className="productdisplay-right-category"><span>Category:</span>Women , T-shirt, Top-crop</p>
                <p className="productdisplay-right-category"><span>Tags:</span>Modern , Latest</p>

            </div>
            

        </div>
    )
}
export default Productdispaly;