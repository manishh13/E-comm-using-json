import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
const men_banner="https://img.freepik.com/free-vector/fashion-style-twitter-header-template_23-2149942960.jpg?w=1380&t=st=1707667846~exp=1707668446~hmac=89aa8edbe38d79d56039761b2b57f6b6a9690ebafdc19f715dacf2a5e30f4c5b"
const women_banner="https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg?w=1380&t=st=1707667117~exp=1707667717~hmac=8c16ae85c32d7345566b3dc09fd3d616eba9414a8ff3999a78727bc1b8797c10"
const kids_banner="https://img.freepik.com/free-vector/flat-social-media-post-template-children_23-2149587949.jpg?w=1060&t=st=1707667519~exp=1707668119~hmac=53586d53e4f053305b968440d64e8751b350c34b5c7cff2febf46a48277f5535"
function App() {
  return (
    <>
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
<Route path="/" element={<Shop/>}/>
<Route path="/men" element={<ShopCategory banner={men_banner} category='men'/>}/>
<Route path="/women" element={<ShopCategory banner={women_banner} category='women'/>}/>
<Route path="/kids" element={<ShopCategory banner={kids_banner} category='kids'/>}/>
<Route path="/product" element={< Product/>}/>
<Route path=":productId" element={< Product/>}/>
<Route path="/cart" element={< Cart/>}/>
<Route path="/login" element={< LoginSignup/>}/>

    </Routes>
    <Footer/>
    
    </BrowserRouter>
    </>
  );
}

export default App;
