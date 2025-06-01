import { NextRequest, NextResponse } from "next/server";
import User from "../../../../models/userModel";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { connect } from "../../../../dbConfig/dbConfig";

export async function POST(request: NextRequest) {

    try {

        await connect();


        const reqBody = await request.json();
        const { email, password } = reqBody;

        // check if the user exist

        const user = await User.findOne({ email });

        if (!user) return NextResponse.json(
            { error: "User does not exist" },
            { status: 400 }
        )

        // check if the password is correct
        const validPassword = await bcryptjs.compare(password, user.password)

        if (!validPassword) return NextResponse.json(
            { error: "Invalid password!" },
            { status: 400 }
        )

        // create tokenData
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });

        const response = NextResponse.json({
            message: "Login successful",
            token,
            success: true,
        }, { status: 200 })

        response.cookies.set("token", token, {
            httpOnly: true,

        })

        return response;






    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}