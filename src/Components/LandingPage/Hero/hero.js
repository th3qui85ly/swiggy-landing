import React from 'react';
import './hero.css';
import Logo from '../assets/Swiggy_logo.png';
import Button from './button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Hero = () => {
    return (
        <div className="herosection">
            <div className="hero-subsec">
                {/* <HSEC1 /> */}
                <div className="hsec1">
                    <img className="logo" src={Logo} alt="swiggylogo" />
                    <div className="button-sect">
                        <Button classes={'login-btn'} name={'Login'} />
                        <Button classes={'sign-up-btn'} name={'Sign up'} />
                    </div>
                </div>
                {/* <HSEC2 /> */}
                <div className="hsec2">
                    <h1 className="heading-hsec2"><span className="animation-heading"></span></h1>
                    <p className="dull-text">Order food from favourite restaurants near you.</p>
                </div>
                {/* <HSEC3 /> */}
                <div className="hsec3">
                    <div className="input-container">
                        <div className="inputPlocate">
                            <input className="input-box" type="text" placeholder="Enter your delivery location" />
                            <div className="locate-btn">
                            <FontAwesomeIcon icon="crosshairs"/>
                            <span> &nbsp;Locate Me</span>
                            </div>
                        </div>
                        <Button classes={'find-food-btn'} name={'Find Food'} />
                    </div>
                </div>
                {/* <HSEC4 /> */}
                <div className="hsec4">
                    <h3 className="hsec4-h3">POPULAR CITIES IN INDIA</h3>
                    <ul className="list-para">
                        <li className="list-content-hsec4"><a className="list-item-hsec4" href="#city">Ahmedabad</a></li>
                        <li className="list-content-hsec4"><a className="list-item-hsec4" href="#city">Bangalore</a></li>
                        <li className="list-content-hsec4"><a className="list-item-hsec4" href="#city">Chennai</a></li>
                        <li className="list-content-hsec4"><a className="list-item-hsec4" href="#city">Delhi</a></li>
                        <li className="list-content-hsec4"><a className="list-item-hsec4" href="#city">Gurgaon</a></li>
                        <li className="list-content-hsec4"><a className="list-item-hsec4" href="#city">Hyderabad</a></li>
                        <li className="list-content-hsec4"><a className="list-item-hsec4" href="#city">Kolkata</a></li>
                        <li className="list-content-hsec4"><a className="list-item-hsec4" href="#city">Mumbai</a></li>
                        <li className="list-content-hsec4"><a className="list-item-hsec4" href="#city">Pune</a></li>
                        <li className="list-content-hsec4"><a className="list-item-hsec4" href="#city">& more</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Hero;