import { connect } from "@/src/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import Restaurant from "@/src/models/restaurantModel";


export async function GET(request: NextRequest) {

    try {
        await connect();

        // const tokenRecieved = request.cookies.get('token');

        // if (!tokenRecieved) {

        //     return NextResponse.json(
        //         { error: "Not authorized User" },
        //         { status: 400 })
        // }


        // const { email } = await jwt.verify(tokenRecieved.value, process.env.TOKEN_SECRET);

        // if (!email) {

        //     return NextResponse.json(
        //         { error: "Not authorized User" },
        //         { status: 400 })
        // }



        const restaurantList = await Restaurant.find();



        return NextResponse.json({
            data: restaurantList
        }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {

    try {
        await connect();
        const reqBody = await request.json();

        const tokenRecieved = request.cookies.get('token');

        if (!tokenRecieved) {

            return NextResponse.json(
                { error: "Not authorized User" },
                { status: 400 })
        }


        const { id } = await jwt.verify(tokenRecieved.value, process.env.TOKEN_SECRET);

        if (!id) {

            return NextResponse.json(
                { error: "Not authorized User" },
                { status: 400 })
        }

        const { name, address, country, image, contactNumber, status, rating } = reqBody;


        const newRestaurant = new Restaurant({

            name,
            address,
            country,
            image,
            contactNumber,
            status,
            rating

        })

        const savedRestaurant = await newRestaurant.save();

        return NextResponse.json({
            message: "Restaurant added Successfully!",
            success: true
        }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}