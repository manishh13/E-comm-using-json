import React from 'react'
import "./Breadcrums.css"
import { IoIosArrowForward } from "react-icons/io";
function Breadcrums(props) {
    const {product}=props;
    return (
        <div className='breadcrums'>
            Home <img src={<IoIosArrowForward />}/>
            Shop <img src={<IoIosArrowForward />}/>
            {product.category} <img src={<IoIosArrowForward/>}/>
            {product.name}
        </div>
    )
}

export default Breadcrums;
