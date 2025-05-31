'use client'
import { useRouter } from "next/navigation"
import "./CardM.css"
const CardM = () => {

    const route = useRouter();


    return (
        <div className="restaurant-card" onClick={()=> route.push('/user/restaurant/1')}>
            <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Grill Town" />
            <div className="card-content">
                <h3>Burger House</h3>
                <p>Fast Food, Burgers</p>
                <span>⭐ 4.5</span>
                <a onClick={()=> route.push('/user/restaurant/1')} className="btn">View Details</a>
            </div>
        </div>
    )
}

export default CardM;