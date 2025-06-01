import { connect } from "@/src/dbConfig/dbConfig";
import Product from "@/src/models/productModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    try {

        await connect();

        const id = request.url.split("product/")[1];

        const productDetails = await Product.findById(id);

        return NextResponse.json({
            productDetails,
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