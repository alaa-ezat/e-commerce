import React from "react";
import './footer.css'
import logo from '../assets/logo2.png';
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import Whatsup_icon from '../assets/whatsapp_icon.png'


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={logo} alt="" />
                <p>VERDANTIQUE</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icon-containers">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icon-containers">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icon-containers">
                    <img src={Whatsup_icon} alt="" />
                </div>
            </div>
            <div className="footer-copytight">
                <hr />
                <p>Copyright @ 2023 -All right reserved</p>
            </div>
        </div>
    )
}
export default Footer;