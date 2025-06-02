import { connect } from "@/src/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Cart from "@/src/models/cartModel";

export async function POST(request: NextRequest) {

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

        const { products,totalPrice } = await request.json()


        const addNewInCart = new Cart({

            user: id,
            products,
            totalPrice
        })

        const saveCartData = await addNewInCart.save();

        return NextResponse.json({ message: "Added to cart?", success: true }, { status: 200 })




    } catch (err) {
        return NextResponse.json({
            error: err.message,
        }, { status: 500 })
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

        const cartList = await Cart.find()

        return NextResponse.json({ cartList }, { status: 200 })


    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}

