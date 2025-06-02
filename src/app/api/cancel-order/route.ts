import { connect } from "@/src/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Cart from "@/src/models/cartModel";
import { orderStatus } from "../common/orderStatus";
import Order from "@/src/models/orderModel";
import User from "@/src/models/userModel";

export async function POST(request: NextRequest) {

    try {


        await connect();

        const tokenRecieved = request.cookies.get('token');

        if (!tokenRecieved) {

            return NextResponse.json(
                { error: "Not authorized User" },
                { status: 400 })
        }


        const userData = await jwt.verify(tokenRecieved.value, process.env.TOKEN_SECRET);

        const { role } = await User.findById(userData.id);

        console.log(role, "ROLE CHECK")

        if (role === 'MEMBER') return NextResponse.json({ mesage: "You are not authorized" }, { status: 500 })


        if (!userData.id) {

            return NextResponse.json(
                { error: "Not authorized User" },
                { status: 400 })
        }

        const { id } = await request.json();


        const updatedOrder = await Order.findByIdAndUpdate(
            id,
            {
                status: orderStatus[4]
            },
            { new: true } // return the updated document
        )

        // console.log(updatedOrder, "-", id)

        return NextResponse.json({ message: "Your order has been cancelled", success: true }, { status: 200 })




    } catch (err) {
        return NextResponse.json({
            error: err.message,
        }, { status: 500 })
    }

}