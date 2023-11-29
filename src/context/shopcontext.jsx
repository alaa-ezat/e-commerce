import React, { createContext, useState, useEffect, useMemo, useCallback } from "react";
import all_product from '../components/assets/all_product';

export const ShopContext = createContext(null);

const GetDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[all_product[index].id] = 0;
    }
    return cart;
}

export const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(GetDefaultCart());

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []); 


    const addToCart = (productId, quantity) => {
        setCartItems((prevCartItems) => {
            const updatedCart = { ...prevCartItems };
            updatedCart[productId] = (updatedCart[productId] || 0) + quantity;
    
            console.log('Updated Cart:', updatedCart);  
    
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    
            console.log("Adding to cart:", productId, "Quantity:", updatedCart[productId]);
            return updatedCart;
        });
    }

    const removeFromCart = (productId) => {
        setCartItems((prevCartItems) => {
            const updatedCart = { ...prevCartItems };
            delete updatedCart[productId];

            localStorage.setItem('cartItems', JSON.stringify(updatedCart));

            console.log("Removed product ID:", productId);
            console.log("Updated cart after removal:", updatedCart);
            return updatedCart;
        });
    }

    const gettotalcartitems = useCallback(() => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        console.log("Total cart items:", totalItems);
        return totalItems;
    }, [cartItems]);
    
    

    const contextValue = useMemo(() => ({
        gettotalcartitems,
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
    }), [cartItems, gettotalcartitems]);

    return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
}