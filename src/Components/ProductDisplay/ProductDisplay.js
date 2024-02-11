import React from 'react'
import "./ProductDisplay.css"
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
function ProductDisplay(props) {
    const {product}=props;
    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={product.image}/>
                    <img src={product.image}/>
                    <img src={product.image}/>
                    <img src={product.image}/>
                </div>
                <div className='productdisplay-img'>
                    <img src={product.image} className='productdisplay-main-img'/>
                    </div>
            </div>
            <div className='productdisplay-right'>
           <h1>{product.name}</h1>
           <div className='productdisplay-right-star'>
            <img src={<FaStar />}/>
            <img src={<FaStar />}/>
            <img src={<FaStar />}/>
            <img src={<FaStar />}/>
            
            <img src={<FaRegStar />}/>
            <p>(120)</p>
           </div>
            </div>
            
        </div>
    )
}

export default ProductDisplay;
