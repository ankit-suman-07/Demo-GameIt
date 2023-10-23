import React from 'react';
import "./Signup.css";

import BackGround from "../../assets/signup-bg.png";
import GoogleIcon from "../../assets/google.png";

const Signup = () => {
    return (
        <div className='signup' >
            <img src={BackGround} alt='background' />
            <div className='signup-box-outer' >
                <div className='signup-box' >
                    <div className='signin-inner' >
                        <input type='email' placeholder='Email ID' />
                        <input type='password' placeholder='Password' />
                        <button>Log In</button>
                        <div className='mid-text' >
                            Or, Sign In using Google
                        </div>
                        <img src={GoogleIcon} alt='google icon' />
                    </div>
                    <div className='signup-inner' >
                        Not an existing user? Click Here
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup