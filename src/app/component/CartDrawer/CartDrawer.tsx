'use client'
import { useRouter } from 'next/navigation'
import './cartDrawer.css'
const CartDrawer = ({ open, setOpen }) => {

  const router = useRouter()

  return (
    <div id="cartDrawer" className="cart-drawer" style={{
      right: open && 0
    }}>
      <h2>Your Cart</h2>
      <div id="cartItems"></div>
      <div className="cart-footer">
        <p id="totalPrice">Total: ₹0</p>
        <button className="btn" onClick={()=>router.push('/user/checkout')}>Checkout</button>
      </div>
      <button className="close-btn" onClick={() => setOpen(!open)}>Close ✖️</button>
    </div>
  )

}

export default CartDrawer