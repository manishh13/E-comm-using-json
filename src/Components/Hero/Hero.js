import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import "./Hero.css"
const girlImg="https://www.nicepng.com/png/full/909-9092550_3200-x-4809-6-girl-shopping-image-png.png";
const waveHand="https://emojiisland.com/cdn/shop/products/Waving_Hand_Sign_Emoji_Icon_ios10_large.png?v=1571606113";
function Hero() {
    return (
        <>
        <div className='hero'>
           <div className='hero-left'>
            <h2>New Arrival Only</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={waveHand} />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collection</div>
                {/* <img /> */}
                <FaArrowRightLong />

            </div>
            </div> 
           <div className='hero-right'>
            <img src={girlImg} height="100%" width="100%"/>
            </div> 
            </div>
        </>
    )
}

export default Hero;
