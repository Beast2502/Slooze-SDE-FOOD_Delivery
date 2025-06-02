'use client'
import { useState } from "react"
import "./FloatingCart.css"
import CartDrawer from "../CartDrawer/CartDrawer";
import { useSelector } from "react-redux";
const FloatingCart = () => {

    const [drawer , setDrawer] = useState(false);
  const cartItems = useSelector(state => state.cart.products);

    return (<>
        <div id="floating-cart" onClick={()=> setDrawer(!drawer)}>
            <i className="fa fa-shopping-cart"></i>
            <span id="cart-count">{cartItems.length}</span>
        </div>
        <CartDrawer open={drawer} setOpen={setDrawer}/>
    </>)

}

export default FloatingCart