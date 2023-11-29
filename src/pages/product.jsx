import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/shopcontext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/breadcrum/breadcrum";
import Productdispaly from "../components/productdisplay/productdisplay";
import Descriptionbox from "../components/descriptionbox/descriptionbox";
import Relatedproducts from "../components/realatedproducts/relatedproducts";


const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));

    // Check if product is not found
    if (!product) {
        return <div>Product not found</div>; // Or you can redirect to another page
    }

    return (
        <div>
           <Breadcrum product={product} /> 
           <Productdispaly product={product} />
           <Descriptionbox/>
           <Relatedproducts/>
        </div>
    );
}

export default Product;






