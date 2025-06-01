'use client'
import CartDrawer from "@/src/app/component/CartDrawer/CartDrawer"
import "./restaurant.css"
import { use, useEffect, useState } from "react"
import axios from "axios"
const RestaurantsDetailPage = ({ params }) => {

    const id = use(params).id;

    const [drawer, setDrawer] = useState(false);

    const [loading, setLoading] = useState(false);
    const [restaurantDetails, setRestaurantDetails] = useState({});
    const [productList, setProductList] = useState([]);



    useEffect(() => {

        setLoading(true)
        axios.get(`/api/restaurant/${id}`).then(res => {
            console.log(res.data, "RESTAURANT DATA");
            setRestaurantDetails(res.data.restaurantDetails);
            setProductList(res.data.productsList)
            setLoading(false)
        })
    }, [])

    return (<>
        <section className="banner">
            <img src="/477.jpg" alt="Restaurant Banner" width={"100%"} />
        </section>

        <section className="restaurant-info">
            <div className="container">
                <h1>{restaurantDetails?.name}</h1>
                <p className="details">Category: {restaurantDetails?.categories} | Rating: ⭐ {restaurantDetails?.rating} | 📍 {restaurantDetails.address} ,{restaurantDetails?.country}</p>
                <p className="description">
                    {restaurantDetails?.description}
                </p>
            </div>
        </section>

        <section className="food-list">
            <div className="container">
                <h1>Popular Dishes</h1>
                <div className="food-grid">


                    {productList.map(data =>
                        <div className="food-card">
                            <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pasta Alfredo" />
                            <div className="card-content">
                                <h3>{data.name}</h3>
                                <p>⭐ 4.4 | ₹{data.price}</p>
                                <div className="action-row">
                                    <div className="quantity">
                                        <button className="qty-btn"
                                            // onClick="decreaseQty(this)"
                                            onClick={() => console.log(data._id)}
                                        >-</button>
                                        <span className="qty-value">0</span>
                                        <button className="qty-btn"
                                        // onClick="increaseQty(this)"
                                        >+</button>
                                    </div>
                                    <button className="btn" onClick={() => setDrawer(true)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>)}



                   
                    <CartDrawer open={drawer} setOpen={setDrawer} />

                </div>
            </div>
        </section>

    </>)

}

export default RestaurantsDetailPage