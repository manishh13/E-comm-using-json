import React from 'react'
import "./Offers.css"
const Exclusive_img="https://images.unsplash.com/photo-1626948683848-a20d8b769e3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
const Offers=()=> {
  return (
<>
<div className='offers'>

<div className='offers-left'>
    <h1>Exclusive</h1>
    <h1>Offers for you</h1>
    <p>ONLY ON BEST SELLERS PRODUCTS</p>
    <button>Check Now</button>
</div>
<div className='offers-right'>
    <img src={Exclusive_img} alt='no image found'/>
</div>

</div>
</>
  )
}
export default Offers;