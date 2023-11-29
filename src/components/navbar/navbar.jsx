import React, { useContext, useState, useEffect } from "react";
import './navbar.css';
import logo from '../assets/logo2.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopcontext";

const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const { gettotalcartitems } = useContext(ShopContext);

    useEffect(() => {
        console.log('Navbar component re-rendered with cartItems change');
    }, [gettotalcartitems]);

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>VERDANTIQUE</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu('shop') }}> <Link style={{ textDecoration: 'none', color: menu === 'shop' ? '#FFE650' : 'initial' }} to=''>Shop</Link>{menu === 'shop' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('mens') }}><Link style={{ textDecoration:'none' , color: menu === 'mens' ? '#FFE650' : 'initial'}} to='mens'>men</Link>{menu === 'mens' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('womens') }}><Link style={{ textDecoration:'none' , color: menu === 'womens' ? '#FFE650' : 'initial'}} to='womens'>women</Link>{menu === 'womens' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('kids') }}><Link style={{ textDecoration:'none' , color: menu === 'kids' ? '#FFE650' : 'initial'}} to='kids'>kids</Link>{menu === 'kids' ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            </div>
            <div className="nav-cart-counter">{gettotalcartitems()}</div>
        </div>
    )
}

export default Navbar;
