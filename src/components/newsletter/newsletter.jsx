import React from "react";
import './newsletter.css';

const NewsLetter = () => {
    return (
        <div className="newsletter">
            <h1>Unlock Exclusive Offers Delivered to Your Inbox</h1>
            <p>Subscribe to our newsletter to stay informed and access exclusive promotions.</p>

        <div>
            <input type="email" placeholder="Your Email id" />
            <button>Subscribe</button>
        </div>
            
        </div>
    );
}

export default NewsLetter;
