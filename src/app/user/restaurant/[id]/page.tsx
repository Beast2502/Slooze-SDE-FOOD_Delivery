'use client'
import CartDrawer from "@/src/app/component/CartDrawer/CartDrawer"
import "./restaurant.css"
import { useState } from "react"
const RestaurantsDetailPage = () => {

    const [drawer, setDrawer] = useState(false)

    return (<>
        <section className="banner">
            <img src="/477.jpg" alt="Restaurant Banner" width={"100%"} />
        </section>

        <section className="restaurant-info">
            <div className="container">
                <h1>Burger House</h1>
                <p className="details">Category: Fast Food, Burgers | Rating: ⭐ 4.5 | 📍 New Delhi</p>
                <p className="description">
                    Burger House is known for its mouth-watering juicy burgers made with fresh ingredients and our secret sauces. Come enjoy a variety of options in a cozy environment.
                </p>
            </div>
        </section>

        <section className="food-list">
            <div className="container">
                <h1>Popular Dishes</h1>
                <div className="food-grid">

                    <div className="food-card">
                        <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pasta Alfredo" />
                        <div className="card-content">
                            <h3>Cheese Pizza</h3>
                            <p>⭐ 4.6 | ₹250</p>
                            <button className="btn">Add to Cart</button>
                        </div>
                    </div>

                    <div className="food-card">
                        <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pasta Alfredo" />
                        <div className="card-content">
                            <h3>Veg Burger</h3>
                            <p>⭐ 4.4 | ₹180</p>
                            <div className="action-row">
                                <div className="quantity">
                                    <button className="qty-btn"
                                    // onClick="decreaseQty(this)"
                                    >-</button>
                                    <span className="qty-value">1</span>
                                    <button className="qty-btn"
                                    // onClick="increaseQty(this)"
                                    >+</button>
                                </div>
                                <button className="btn">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className="food-card">
                        <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pasta Alfredo" />
                        <div className="card-content">
                            <h3>Pasta Alfredo</h3>
                            <p>⭐ 4.5 | ₹220</p>
                            <button className="btn" onClick={() => setDrawer(true)}>Add to Cart</button>
                        </div>
                    </div>

                    <CartDrawer open={drawer} setOpen={setDrawer}/>

                </div>
            </div>
        </section>

    </>)

}

export default RestaurantsDetailPage