import { connect } from "@/src/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Order from "@/src/models/orderModel";


export async function POST(request: NextRequest) {

    try {

        await connect();


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

        const reqBody = await request.json();

        const { products, restaurant, totalPrice, customerName, customerContact, deliveryAddress } = reqBody;
        const orderCreate = new Order({
            products,
            restaurant,
            totalPrice,
            customerName,
            customerContact,
            deliveryAddress,
            customerId : id
        })

        const saveOrder = await orderCreate.save();

        return NextResponse.json({ message: "Order is created successfully" }, { status: 200 })




    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 })
    }

}


export async function GET(request: NextRequest) {

    try {

        await connect();

        const tokenRecieved = request.cookies.get('token');

        if (!tokenRecieved) {

            return NextResponse.json(
                { error: "Not authorized User" },
                { status: 400 })
        }


        const { email, id } = await jwt.verify(tokenRecieved.value, process.env.TOKEN_SECRET);

        if (!id) {

            return NextResponse.json(
                { error: "Not authorized User" },
                { status: 400 })
        }

        const orderList = await Order.find()

        return NextResponse.json({ orderList }, { status: 200 })


    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}

