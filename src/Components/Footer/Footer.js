import React from 'react'
import "./Footer.css"
import { GrInstagram } from "react-icons/gr";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
function Footer() {
    return (
       <>
        <div className='footer'>
            <div className='footer-logo'>
                {/* <img src='' alt='footer logo'/> */}
                <SiCashapp style={{fontSize:'50px', color:'yellow'}}/>
                <p>SHOPPER</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='footer-social-icon'>
                <div className='footer-icons-container'>
                    {/* <img src={} alt='instagram-icon'/> */}
                    <GrInstagram />
                </div>
                <div className='footer-icons-container'>
                    {/* <img src={} alt='pinterest-icon'/> */}
                    <FaSquarePinterest />
                </div>
                <div className='footer-icons-container'>
                    {/* <img src={} alt='whatsapp-icon'/> */}
                    <FaWhatsappSquare />
                </div>
            </div>
            <div className='footer-copywrite'>
                <hr/>
                <p>Copywrite @2024-All rights reserved</p>
            </div>
            </div>
       </>
    )
}

export default Footer;
