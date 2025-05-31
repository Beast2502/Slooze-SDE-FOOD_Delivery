'use client'
import "./Card.css"
import { useRouter } from "next/navigation"

const Card = ({data}) => {
    const router = useRouter();

    console.log(data, "CARD DATA")

    return (
        <div className="card" key={data._id} onClick={() => router.push(`/user/restaurant/${data._id}`)}>
            <img src={data.image} alt={data.name} />

            <h3>{data.name}</h3>
            <p>📍 {data.address}, {data.country}</p>
            <p>⭐ {data.rating}</p>
        </div>
    )

}

export default Card;