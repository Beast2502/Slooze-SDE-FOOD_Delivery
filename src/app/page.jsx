'use client'
import axios from "axios";
import Card from "./component/Card/Card";
import FloatingCart from "./component/FloartingCart/FloatingCart";
import Header from "./component/Header/Header";
import StoriesSection from "./component/Stories/Stories";
import "./globals.css"
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
export default function Home() {

  const [restaurants, setRestaurant] = useState([]);

  const getTheData = () => {
    axios.get('/api/restaurant').then(res => {

      setRestaurant(res.data.data)
    })
  }

  useEffect(() => {
    getTheData()
  }, [])

  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    setToken(storedToken);
  }, []);
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
        {token && <FloatingCart />}

        <footer className="footer">
          <div className="container">
            <p>&copy; 2025 Foodies | Designed for demo ❤️</p>
          </div>
        </footer>

      </div>
    </div>

  );
}
