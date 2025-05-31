'use client'
import { useRouter } from 'next/navigation'
import './thankyou.css'

const ThankYouPage = () => {
    const router = useRouter()

    return (
        <div className="thankyou-container">
            <div className="thankyou-card">
                <img src="https://cdn-icons-png.flaticon.com/512/148/148767.png" alt="Checkmark" className="check-icon" />
                <h1>Thank You!</h1>
                <p>Your order has been placed successfully.</p>
                <p>We’ll deliver your food shortly 🍕🍔🥤</p>

                <div className="actions">
                    <a onClick={()=>router.push('/')} className="btn">Back to Home</a>
                    <a onClick={()=>router.push('/user/order-history')} className="btn btn-secondary">View Orders</a>
                </div>
            </div>
        </div>
    )

}

export default ThankYouPage