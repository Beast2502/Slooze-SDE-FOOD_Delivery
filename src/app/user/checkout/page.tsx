'use client'

import { useRouter } from 'next/navigation';
import './checkout.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
const CheckoutPage = () => {

    const router = useRouter();

    const [customerName, setCustName] = useState('');
    const [customerContact, setCustContact] = useState('');
    const [deliveryAddress, setDelivAdd] = useState('');

    const cartItems = useSelector(state => state.cart.products);


    const getCartItemsDatta = () => {

        axios.get('/api/cart').then(res => console.log(res, "RESPONSE CHECKOUT"))
    }

    useEffect(() => { getCartItemsDatta() }, [])

    let totalPrice = 0;
    cartItems.forEach(element => {
        totalPrice += element.price * element.quantity
    });
    const handleCreateOrder = () => {

        if(!cartItems.length) return toast.error('Please add product!')
        if(!customerName) return toast.error('Please add Name!');
        if(!customerContact) return toast.error('Please ass Contact Source!')
        if(!deliveryAddress) return toast.error('Please add Delivery address!')
        axios.post('/api/orders', {
            products: cartItems.map(data => ({ product: data.product, quantity: data.quantity })),
            totalPrice,
            customerName,
            customerContact,
            deliveryAddress,
        }).then(res => {
            router.push('/user/thank-you')

        }).catch(err => {
            console.log(err.response.data.mesage);
            toast.error(err.response.data.mesage)
        })
    }


    return (
        <div className="checkout-container">
            <h1>Checkout</h1>

            <div className="order-items" id="orderItems">
                {
                    cartItems.map(item => <div className="order-item">
                        <span>{item.name} × {item.quantity}</span>
                        <span>₹{item.price}</span>
                    </div>)
                }


            </div>

            <div className="total" id="totalAmount">Total: ₹{totalPrice}</div>

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" onChange={(e)=>setCustName(e.target.value)}/>
            </div>

            <div className="form-group">
                <label htmlFor="address">Delivery Address</label>
                <textarea id="address" placeholder="Full Address" onChange={(e)=>setDelivAdd(e.target.value)}></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" placeholder="Mobile Number" onChange={(e)=>setCustContact(e.target.value)}/>
            </div>

            <button className="btn" onClick={handleCreateOrder}>Place Order</button>
        </div >)
}

export default CheckoutPage