
import User from "../../../../models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { connect } from "../../../../dbConfig/dbConfig";


export async function POST(request: NextRequest) {

    try {

        await connect()

        const reqBody = await request.json();

        const { username, email, password } = reqBody;

        const user = await User.findOne({ email });

        if (user) {
            return NextResponse.json({
                error : "User Already exists!",
                status : 400
            })
        }

        // hash pass
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashPassword
        })

        const savedUser = await newUser.save();


        return NextResponse.json({
            message : "User created Successfully",
            success : true,
            savedUser
        }
          
        )
    } catch (err) {

        console.log(err)
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}

