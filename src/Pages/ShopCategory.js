import React, { useContext } from 'react'
import "./CSS/ShopCategory.css";
import { IoIosArrowDropdown } from "react-icons/io";
import { ShopContext } from '../Context/shopContext';
import Item from '../Components/Item/Item';
function ShopCategory(props) {
    const {all_products}=useContext(ShopContext);
    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt='banner' style={{width:"100%",height:"400px"}}/>
            <div className='shopcategory-indexSort'>
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className='shopcategory-sort'>
                    Sort by <img src={<IoIosArrowDropdown />} alt='dropdown Icon'/>
                </div>
            </div>
            <div className='shopcatergory-products'>
                {all_products.map((item,i)=>{
                    if(props.category===item.category){
                        return<Item key={i} id={item.id} name={item.name} image={item.image} new_prices={item.new_price} old_price={item.old_price}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
            <div className='shopcategory-loadmore'>
                Explore More
            </div>
        </div>
    )
}

export default ShopCategory;
