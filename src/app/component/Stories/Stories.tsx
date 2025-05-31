'use client'
import './Stories.css';

const StoriesSection = () => {

    const foodItems = [
        {
            name: "Pizza",
            image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg"
        },
        {
            name: "Burger",
            image: "https://images.pexels.com/photos/161674/appetite-beef-big-bread-161674.jpeg"
        },
        {
            name: "Pasta",
            image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg"
        },
        {
            name: "Sushi",
            image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg"
        },
        {
            name: "Salad",
            image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
        },
        {
            name: "Ice Cream",
            image: "https://images.pexels.com/photos/461430/pexels-photo-461430.jpeg"
        },
        {
            name: "Steak",
            image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg"
        },
        {
            name: "Pancakes",
            image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
        },
        {
            name: "Tacos",
            image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
        },
        {
            name: "Fried Chicken",
            image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg"
        },
        {
            name: "Donuts",
            image: "https://images.pexels.com/photos/867452/pexels-photo-867452.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Biryani",
            image: "https://images.pexels.com/photos/1117863/pexels-photo-1117863.jpeg"
        },
        {
            name: "Momos",
            image: "https://images.pexels.com/photos/2097091/pexels-photo-2097091.jpeg"
        },
        {
            name: "Sandwich",
            image: "https://images.pexels.com/photos/1600716/pexels-photo-1600716.jpeg"
        },
        {
            name: "Smoothie Bowl",
            image: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg"
        }
    ];


    return (
        <div className="story-bar">
            {
                foodItems.map((data) => <div className="story" key={data.name}>
                    <img src={data.image} alt={data.name} />
                    <span>{data.name}</span>
                </div>)
            }

           
        </div>
    )
}

export default StoriesSection;