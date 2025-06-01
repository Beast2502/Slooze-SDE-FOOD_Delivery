'use client'
import axios from "axios";
import Card from "./component/Card/Card";
import FloatingCart from "./component/FloartingCart/FloatingCart";
import Header from "./component/Header/Header";
import StoriesSection from "./component/Stories/Stories";
import "./globals.css"
import { useEffect, useState } from "react";
export default function Home() {

  const [restaurants, setRestaurant] = useState([]);

  //   {
  //     id: 1,
  //     name: "Indian Accent",
  //     rating: 4.7,
  //     location: "The Lodhi, New Delhi",
  //     image: "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg"
  //   },
  //   {
  //     id: 2,
  //     name: "Bomras",
  //     rating: 4.6,
  //     location: "Goa",
  //     image: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg"
  //   },
  //   {
  //     id: 3,
  //     name: "Masque",
  //     rating: 4.8,
  //     location: "Mumbai, Maharashtra",
  //     image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
  //   },
  //   {
  //     id: 4,
  //     name: "Avartana",
  //     rating: 4.7,
  //     location: "ITC Grand Chola, Chennai",
  //     image: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg"
  //   },
  //   {
  //     id: 5,
  //     name: "Sienna Store & Café",
  //     rating: 4.5,
  //     location: "Kolkata, West Bengal",
  //     image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
  //   },
  //   {
  //     id: 6,
  //     name: "The Bombay Canteen",
  //     rating: 4.6,
  //     location: "Mumbai, Maharashtra",
  //     image: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg"
  //   },
  //   {
  //     id: 7,
  //     name: "O Pedro",
  //     rating: 4.5,
  //     location: "Mumbai, Maharashtra",
  //     image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
  //   },
  //   {
  //     id: 8,
  //     name: "Veronica’s",
  //     rating: 4.4,
  //     location: "Mumbai, Maharashtra",
  //     image: "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg"
  //   },
  //   {
  //     id: 9,
  //     name: "Americano",
  //     rating: 4.5,
  //     location: "Mumbai, Maharashtra",
  //     image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
  //   },
  //   {
  //     id: 10,
  //     name: "Izumi Bandra",
  //     rating: 4.6,
  //     location: "Mumbai, Maharashtra",
  //     image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg"
  //   },
  //   {
  //     id: 11,
  //     name: "Trincas",
  //     rating: 4.3,
  //     location: "Park Street, Kolkata",
  //     image: "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg"
  //   },
  //   {
  //     id: 12,
  //     name: "Rustom’s",
  //     rating: 4.2,
  //     location: "New Delhi",
  //     image: "https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg"
  //   },
  //   {
  //     id: 13,
  //     name: "Peshawri",
  //     rating: 4.8,
  //     location: "ITC Maratha, Mumbai",
  //     image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
  //   },
  //   {
  //     id: 14,
  //     name: "Tamarind",
  //     rating: 4.5,
  //     location: "Chennai, Tamil Nadu",
  //     image: "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg"
  //   },
  //   {
  //     id: 15,
  //     name: "Calcutta Canteen",
  //     rating: 4.3,
  //     location: "Kolkata, West Bengal",
  //     image: "https://images.pexels.com/photos/257445/pexels-photo-257445.jpeg"
  //   }
  // ];

  const getTheData = () => {
    axios.get('/api/restaurant').then(res => {

      setRestaurant(res.data.data)
    })
  }

  useEffect(() => {
    getTheData()
  }, [])
  return (
    <div>
      <Header />
      <div>
        <section className="hero">
          <div className="container hero-container">
            <input type="text" placeholder="Search for restaurant, cuisine or a dish..." />
          </div>
        </section>

        <section className="restaurants">
          <div className="container">
            <StoriesSection />

            <h2>Popular Restaurants</h2>

            <div className="cards">

              {restaurants.map((data) => <Card data={data} />)}

            </div>
          </div>
        </section>
        <FloatingCart />

        <footer className="footer">
          <div className="container">
            <p>&copy; 2025 Foodies | Designed for demo ❤️</p>
          </div>
        </footer>

      </div>
    </div>

  );
}
