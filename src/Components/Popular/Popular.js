import React from 'react'
import "./Popular.css"
import dataproducts from "../Assets/data"
import Item from '../Item/Item'
function Popular() {
    return (
        <div className='popular'>
            <h1>Popular In Women</h1>
            <hr/>
            <div className='popular-item'>
                {dataproducts.map((item,i)=>{
                    return(
                        <Item key={i} id={item.id} name={item.name} image={item.image} new_prices={item.new_price} old_price={item.old_price}/>
                    )
 
                })}
            </div>
        </div>
    )
}

export default Popular;
