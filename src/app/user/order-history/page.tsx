'use client'
import axios from 'axios'
import './order-history.css'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { paymentStatus } from '../../api/common/orderStatus'
const OrderHistoryPage = () => {



    const [prevousOrders, setPreviousOrders] = useState([]);


    const fetchOrders = () => {

        axios.get('/api/orders').then(res => {
            console.log(res.data.orderList, "ORDER HISTORY");

            setPreviousOrders(res.data.orderList)
        })
    }

    useEffect(() => {
        fetchOrders()
    }, [])

    const handleCancelOrder = (id) => {
        axios.post('/api/cancel-order', { id }).then(res => {
            console.log(res, "RESPONSE of cancel");
            fetchOrders()

            toast.success('Order has been cancelled!')
        }).catch(err => toast.error(err.response.data.mesage)
        )
    }

    const handleOrderStatus = (id, status) => {
        axios.post('/api/payments', { id, status }).then(res => {
            console.log(res, "RESPONSE of cancel");
            fetchOrders()

            toast.success('Payment status updated!')
        }).catch(err => toast.error(err.response.data.mesage)
        )
    }


    return (<div className="container">
        <h1>🍽️ Your Order History</h1>

        {
            prevousOrders.map(data => <div className="order-card" key={data._id}>
                <div className="order-header">
                    <h3>Order ID : {data._id}</h3>
                    <span className={data.status === "cancelled" ? "status cancelled " : "status delivered "}>{data.status}</span>
                    <button className='status cancelled' onClick={() => handleCancelOrder(data._id)}>Cancel Order</button>
                    <select value={data.payMentStatus} onChange={(e)=>handleOrderStatus(data._id , e.target.value)}>
                        {
                            paymentStatus.map(status => <option value={status}>{status}</option>)
                        }
                    </select>
                </div>
                <p><strong>Order Date:</strong>{data.createdAt}</p>
                <p><strong>Items:</strong>  {data.products.map(item => <div>{item.product.name} * {item.quantity} Qty</div>)} </p>
                <p><strong>Total:</strong> ₹{data.totalPrice}</p>
                {/* <button className="details-btn">View Details</button> */}
            </div>)
        }



    </div>)
}

export default OrderHistoryPage