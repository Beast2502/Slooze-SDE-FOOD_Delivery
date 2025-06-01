'use client'
import { useRouter } from "next/navigation"
import "./CardM.css"
const CardM = ({ data }) => {

    const route = useRouter();


    return (
        <div className="restaurant-card" onClick={() => route.push(`/user/restaurant/${data._id}`)}>
            <img src={data.image} alt="Grill Town" />
            <div className="card-content">
                <h3>{data.name}</h3>
                <p>📍 {data.address} , {data.country}</p>
                <span>⭐ {data.rating}</span>
                <a onClick={() => route.push(`/user/restaurant/${data._id}`)} className="btn">View Details</a>
            </div>
        </div>
    )
}

export default CardM;