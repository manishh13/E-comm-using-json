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
           <div className='productdisplay-right-prices'>
            <div className='productdisplay-right-price-old'>${product.old_price}</div>
            <div className='productdisplay-right-price-new'>${product.new_price}</div>
           </div>
           <div className='productdisplay-right-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
           <div className='productdisplay-right-size'>
            <h1>Select Size</h1>
            <div className='productdisplay-rigt-size'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
           </div>
           <button>Add To Cart</button>
           <p className='productdisplay-right-category'>
            <span>Category:</span>
            Women,T-Shirt,Crop Top</p>
           <p className='productdisplay-right-category'>
            <span>Tags:</span>
            Modern,Latest
           </p>
            </div>
            
        </div>
    )
}

export default ProductDisplay;
