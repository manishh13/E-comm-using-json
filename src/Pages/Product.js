import React, { useContext } from 'react'
import { ShopContext } from '../Context/shopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

function Product() {
    const {all_products}=useContext(ShopContext);
    const {productId}=useParams();
    const product=all_products.find((e)=>
        e.id===Number(productId))
    return (
        <>
        
        <div>
            <Breadcrums product={product}/>
            <ProductDisplay product={product}/>
        </div>
        </>
    )
}

export default Product;
