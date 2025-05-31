'use client'

import StoriesSection from '../../component/Stories/Stories'
import CardM from './component/CardM/CardM'
import './restaurtantList.css'
const RestaurantListPage = () => {

    return (<section className="restaurant-list">
        <div className="container">
            <StoriesSection />
            <h1>Top Restaurants</h1>
            <div className="restaurants-grid">

                <CardM />
                <CardM />
                <CardM />


            </div>
        </div>
    </section>)

}

export default RestaurantListPage