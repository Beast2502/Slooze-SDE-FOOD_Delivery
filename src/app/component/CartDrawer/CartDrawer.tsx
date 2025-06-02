'use client'
import { useRouter } from 'next/navigation'
import './cartDrawer.css'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { addToCart } from '@/src/store/cart/cartSlice';
const CartDrawer = ({ open, setOpen }) => {

  const router = useRouter();

  const cartItems = useSelector(state => state.cart.products);

  const [cart, setCart] = useState(cartItems);

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


  const handleAddToCart = (poductDeatils, type) => {


    if (type === "add") {

      if (cart.filter(data => data.product === poductDeatils._id).length) {

        setCart(cart => cart.map(item => item.product === poductDeatils._id ?
          { ...item, quantity: item.quantity + 1 } : item))

      } else {

        setCart([...cart, {
          product: poductDeatils._id,
          quantity: 1,
          price: poductDeatils.price,
          name: poductDeatils.name,
          image: poductDeatils.images
        }])
      }
    }
    if (type === 'remove') {
      if (cart.filter(data => data.product === id)) {
        setCart(cart => cart.map(item => (item.product === id) && { ...item, quantity: item.quantity - 1 }))

      } else {
        setCart([...cart, {
          product: id,
          quantity: 1
        }])
      }

    }

  }

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(addToCart(cart))
  }, [cart])


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
                  <button className='qty-btn'>-</button>
                  <span>{product.quantity}</span>
                  <button className='qty-btn'
                    onClick={() => handleAddToCart(product.name, "add")
                    }>+</button>
                </div>
              </div>
              <i className="fa fa-trash remove-item"></i>
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