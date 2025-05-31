'use client'
import { useState } from "react"
import "./FloatingCart.css"
import CartDrawer from "../CartDrawer/CartDrawer";
const FloatingCart = () => {

    const [drawer , setDrawer] = useState(false);

    return (<>
        <div id="floating-cart" onClick={()=> setDrawer(!drawer)}>
            <i className="fa fa-shopping-cart"></i>
            <span id="cart-count">3</span>
        </div>
        <CartDrawer open={drawer} setOpen={setDrawer}/>
    </>)

}

export default FloatingCart