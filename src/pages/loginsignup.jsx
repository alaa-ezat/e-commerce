import React from "react";
import './css/loginsignup.css'


const loginSignup = () => {
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="First Name"/><br/>
                    <input type="text" placeholder="Last Name"/><br/>
                    <input type="email" placeholder="Email Address"/><br/>
                    <input type="password" placeholder="Password"/><br/>
                </div>
                <button onClick={()=>{alert("You have signed up!")}}>Submit</button><br/>
                <p className="loginsignup-login">Already a member? <span>Login here.</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='agree' id="agree"/>
                    
                    <p>By signing up, you agree to our terms and conditions.</p>
                    
                </div>
            </div>
            
        </div>
    )
}
export default loginSignup