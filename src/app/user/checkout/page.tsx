'use client'

import { useRouter } from 'next/navigation';
import './checkout.css'
const CheckoutPage = () => {

    const router = useRouter();


    return (
    <div className="checkout-container">
        <h1>Checkout</h1>

        <div className="order-items" id="orderItems">
            <div className="order-item">
                <span>Cheese Pizza × 2</span>
                <span>₹500</span>
            </div>
            <div className="order-item">
                <span>Veg Burger × 1</span>
                <span>₹150</span>
            </div>
        </div>

        <div className="total" id="totalAmount">Total: ₹650</div>

        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />
        </div>

        <div className="form-group">
            <label htmlFor="address">Delivery Address</label>
            <textarea id="address"  placeholder="Full Address"></textarea>
        </div>

        <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="Mobile Number" />
        </div>

        <button className="btn" onClick={() => {router.push('/user/thank-you')}}>Place Order</button>
    </div>)
}

export default CheckoutPage