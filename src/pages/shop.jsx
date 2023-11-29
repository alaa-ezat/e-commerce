import React from "react";
import Hero from '../components/hero/hero';
import Popular from "../components/popular/popular";
import Offers from "../components/offers/offers";
import NewsLetter from "../components/newsletter/newsletter";
import NewCollection from "../components/newcollection/newCollection";


const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/> 
            <Offers/>
            <NewCollection/>
            <NewsLetter/>
        </div>
    )
}
export default Shop;


