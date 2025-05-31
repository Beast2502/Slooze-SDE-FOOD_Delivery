import { connect } from "@/src/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Product from "@/src/models/productModel";

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

        const { name, description, price, categories, stock, images, status, restaurant } = reqBody;

        const newProduct = new Product({
            name,
            description,
            price,
            categories,
            stock,
            images,
            status,
            restaurant
        })

        const saveProduct = await newProduct.save();

        return NextResponse.json(
            {
                message: "Product is added",
                success: true
            },
            { status: 200 },)
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 })

    }
}


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



        const productList = await Product.find();



        return NextResponse.json({
            data: productList
        }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}