import React, { useContext, useEffect} from "react";
import './cartitems.css';
import { ShopContext } from "../../context/shopcontext";

// ... (other imports)


const CartItems = () => {
    const { cartItems, all_product, removeFromCart, gettotalcartitems } = useContext(ShopContext);

    useEffect(() => {
        console.log('Cart items updated:', gettotalcartitems());
    }, [cartItems, gettotalcartitems]);

    const calculateTotal = () => {
        let subtotal = 0;
        for (const product of all_product) {
            const quantity = cartItems[product.id] || 0;
            subtotal += product.new_price * quantity;
        }
        return subtotal;
    }

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((product) => {
                const quantity = cartItems[product.id] || 0;

                if (quantity > 0) {
                    return (
                        <div key={product.id}>
                            <div className="cartitems-format">
                                <img src={product.image} alt="" className="carticon-product-icon" />
                                <p className="title">{product.name}</p>
                                <p>${product.new_price}</p>
                                <button className="classitems-quantity">{quantity}</button>
                                <p>${product.new_price * quantity}</p>
                                <button
                                    className="cartitems-remove-button"
                                    onClick={() => removeFromCart(product.id, quantity)}
                                >
                                    <span role="img" aria-label="Remove">&#x274C;</span>
                                </button>
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${calculateTotal()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${calculateTotal()}</h3>
                        </div>
                    </div>
                    <button>Proceed to Checkout</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="Enter promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;