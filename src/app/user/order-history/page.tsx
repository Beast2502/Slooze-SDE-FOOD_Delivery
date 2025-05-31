import './order-history.css'
const OrderHistoryPage = () => {

    const prevousOrders = [
        {
            "restaurantName": "Masque",
            "status": "Cancelled",
            "orderDate": "21 May 2025",
            "items": ["Sushi Platter", "Miso Soup"],
            "total": 1350
        },
        {
            "restaurantName": "Bastian",
            "status": "Delivered",
            "orderDate": "18 May 2025",
            "items": ["Truffle Pasta", "Garlic Bread"],
            "total": 1850
        },
        {
            "restaurantName": "Yauatcha",
            "status": "Pending",
            "orderDate": "29 May 2025",
            "items": ["Dim Sum Basket", "Crispy Duck Rolls"],
            "total": 2100
        },
        {
            "restaurantName": "The Bombay Canteen",
            "status": "Delivered",
            "orderDate": "15 May 2025",
            "items": ["Vada Pav", "Chai"],
            "total": 400
        },
        {
            "restaurantName": "Indian Accent",
            "status": "Delivered",
            "orderDate": "22 May 2025",
            "items": ["Butter Chicken", "Naan", "Lassi"],
            "total": 1250
        },
        {
            "restaurantName": "Gaggan",
            "status": "Cancelled",
            "orderDate": "20 May 2025",
            "items": ["Foie Gras", "Green Curry"],
            "total": 3000
        },
        {
            "restaurantName": "O Pedro",
            "status": "Delivered",
            "orderDate": "27 May 2025",
            "items": ["Pork Vindaloo", "Goan Fish Curry"],
            "total": 2200
        },
        {
            "restaurantName": "Farzi Cafe",
            "status": "Delivered",
            "orderDate": "25 May 2025",
            "items": ["Molecular Shots", "Paneer Tikka"],
            "total": 1500
        },
        {
            "restaurantName": "Smoke House Deli",
            "status": "Pending",
            "orderDate": "30 May 2025",
            "items": ["Caesar Salad", "Club Sandwich"],
            "total": 900
        },
        {
            "restaurantName": "Hakkasan",
            "status": "Delivered",
            "orderDate": "23 May 2025",
            "items": ["Peking Duck", "Dim Sum"],
            "total": 2700
        }
    ]

    return (<div className="container">
        <h1>🍽️ Your Order History</h1>

        {
            prevousOrders.map(data =>  <div className="order-card" key={data.restaurantName}>
            <div className="order-header">
                <h3>{data.restaurantName}</h3>
                <span className="status delivered">{data.status}</span>
            </div>
            <p><strong>Order Date:</strong>{data.orderDate}</p>
           <p><strong>Items:</strong>  {data.items.map(item => item)} </p>
            <p><strong>Total:</strong>{data.total}</p>
            {/* <button className="details-btn">View Details</button> */}
        </div>)
        }



    </div>)
}

export default OrderHistoryPage