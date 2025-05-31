'use client'
import "./productDetail.css"

const ProductDetailPage = () => {

    return (
        <section className="product-detail">
            <div className="container product-container">
                <div className="product-image">
                    <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Burger" />
                </div>
                <div className="product-info">
                    <h1>Burger House Special</h1>
                    <p className="description">
                        Juicy double cheeseburger loaded with fresh lettuce, tomatoes, pickles and our secret sauce — a perfect choice for burger lovers!
                    </p>
                    <p><strong>Category:</strong> Burgers, Fast Food</p>
                    <p><strong>Rating:</strong> ⭐ 4.5/5</p>
                    <p><strong>Price:</strong> ₹299</p>
                    <button className="order-btn">Order Now</button>
                </div>
            </div>
        </section>
    )

}

export default ProductDetailPage