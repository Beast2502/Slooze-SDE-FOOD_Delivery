import { connect } from "@/src/dbConfig/dbConfig";
import Product from "@/src/models/productModel";
import Restaurant from "@/src/models/restaurantModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    try {

        await connect();

        const id = request.url.split("restaurant/")[1];

        const data = await Restaurant.find({ _id: id });

        const productsList = await Product.find({ restaurant: id });


        return NextResponse.json({
            restaurantDetails : data[0],
            productsList,
            success: true
        }, { status: 200 })
    } catch (err) {
        return NextResponse.json({
            error: err.message,
        }, {
            status: 500
        })
    }
}