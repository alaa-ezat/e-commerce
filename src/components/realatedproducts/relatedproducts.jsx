import React from "react";
import './relatedproducts.css'
import data_product from '../assets/data'
import Item from "../item/item";



const Relatedproducts = () =>{
    return(
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relativeproducts-item">
                {data_product.map((item,i)=>{
                    return <Item key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}/>

                })}
            </div>

        </div>
    )
}
export default Relatedproducts 