import React from "react";
import './breadcrum.css'
import arrow_icon from '../assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const { product } = props;
    return (
        <div className="breadcrumb">
            <span>HOME</span>
            <img src={arrow_icon} alt="" />
            <span>SHOP</span>
            <img src={arrow_icon} alt="" />
            <span>{product.category}</span>
            <img src={arrow_icon} alt="" />
            <span>{product.name}</span>
        </div>
    )
}

export default Breadcrum;
