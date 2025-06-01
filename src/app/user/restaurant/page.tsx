'use client'

import { useEffect, useState } from 'react'
import StoriesSection from '../../component/Stories/Stories'
import CardM from './component/CardM/CardM'
import './restaurtantList.css'
import axios from 'axios'
const RestaurantListPage = () => {

    const [restaurantList, setRestaurantList] = useState([]);


    useEffect(() => {

        axios.get('/api/restaurant').then(res => {
            console.log(res.data.data, "RESPONSE RESTA")
            setRestaurantList(res.data.data)
        })
    }, [])

    return (<section className="restaurant-list">
        <div className="container">
            <StoriesSection />
            <h1>Top Restaurants</h1>
            <div className="restaurants-grid">

                {
                    restaurantList.map(data =>   <CardM  data={data}/>)
                }

              


            </div>
        </div>
    </section>)

}

export default RestaurantListPage