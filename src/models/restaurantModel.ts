import mongoose from "mongoose";
import { countriesList } from "../app/api/common/countries";


const restaurantSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Restaurant name is required'],
            trim: true,
        },
        address: {
            type: String,
            required: [true, 'Restaurant address is required'],
        },
        country: {
            type: String,
            enum : countriesList,
            default: 'India'
        },
        contactNumber: {
            type: String,
            required: [true, 'Contact number is required'],
        },
        image: {
            type: String, // Logo or cover image URL
        },
        status: {
            type: String,
            enum: ['open', 'closed'],
            default: 'open',
        },
        rating: {
            type: String,
            default: '0',
        },
    },
    {
        timestamps: true,
    }
);

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant