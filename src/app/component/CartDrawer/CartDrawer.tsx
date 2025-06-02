'use client'
import { useRouter } from 'next/navigation'
import './cartDrawer.css'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { addToCart, removeFromCart, reduceFromCart } from '@/src/store/cart/cartSlice';
const CartDrawer = ({ open, setOpen }) => {

  const router = useRouter();

  const cartItems = useSelector(state => state.cart.products);

  const [cart, setCart] = useState([]);

  let total = 0;

  cartItems.forEach(element => {
    total += element.price * element.quantity
  });

  const handleCheckout = () => {
    axios.post('/api/cart', {
      products: cartItems.map(data => ({ product: data.product, quantity: data.quantity })),
      totalPrice: total
    }).then(res => {
      console.log(res, "RESPONSE CART ADDED");
      // toast.success("Added to ca")
      router.push('/user/checkout');

    });

  }


  const dispatch = useDispatch()

  console.log(cartItems, cart, "CART ITEMS CHECK")


  const handleAddToCart = (poductDeatils, type) => {


    if (type === "add") {

      dispatch(addToCart({
        product: poductDeatils.product,
        quantity: 1,
        price: poductDeatils.price,
        name: poductDeatils.name,
        image: poductDeatils.image

      }))


    }

    if (type === "remove") {
      dispatch(reduceFromCart(
        { id: poductDeatils.product }

      ))
    }
  }




  return (
    <div id="cartDrawer" className="cart-drawer" style={{
      right: open && 0
    }}>
      <h2>Your Cart</h2>

      <div id="cartItems">
        {
          cartItems.map(product => <>
            <div className="cart-item">
              <img src={product.image} alt="Butter Chicken" />
              <div className="item-details">
                <h4>{product.name}</h4>
                <p>₹{product.price} x {product.quantity}</p>
                <div className="quantity">
                  <button className='qty-btn' onClick={() => handleAddToCart(product, "remove")}>-</button>
                  <span>{product.quantity}</span>
                  <button className='qty-btn'
                    onClick={() => handleAddToCart(product, "add")
                    }>+</button>
                </div>
              </div>
              <i className="fa fa-trash remove-item" onClick={() => dispatch(removeFromCart(product.name))}></i>
            </div>
          </>)
        }
      </div>
      <div className="cart-footer">

        <p id="totalPrice">Total: ₹{total}</p>
        <button className="checkout-btn" onClick={() => {
          handleCheckout()
        }}>Checkout</button>
      </div>
      <button className="close-btn" onClick={() => setOpen(!open)}><i className="fa-solid fa-xmark"></i></button>
    </div>
  )

}

export default CartDrawer