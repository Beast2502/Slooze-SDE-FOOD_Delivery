import { connect } from "@/src/dbConfig/dbConfig";
import { NextRequest, NextResponse, userAgent } from "next/server";
import jwt from "jsonwebtoken";
import Order from "@/src/models/orderModel";
import User from "@/src/models/userModel";
import { rolesList } from "../common/adminRoles";
import Product from "@/src/models/productModel";


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

        const { role } = await User.findById(id);

        console.log(role, "ROLE CHECK")

        if (role === 'MEMBER') return NextResponse.json({ mesage: "You are not authorized" }, { status: 500 })


        const reqBody = await request.json();

        const { products, restaurant, totalPrice, customerName, customerContact, deliveryAddress } = reqBody;
        const orderCreate = new Order({
            products,
            // restaurant,
            totalPrice,
            customerName,
            customerContact,
            deliveryAddress,
            customerId: id
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

        const orderList = await Order.find({ customerId: id }).populate('products.product')  // 👈 this line fetches product details
      .exec();;

        const getProductDetails = async (id) => {
            const result = await Product.findById(id);
            return result
        }


        

        return NextResponse.json({ orderList }, { status: 200 })


    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}

