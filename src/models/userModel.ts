import mongoose from "mongoose";
import { rolesList } from "../app/api/common/adminRoles";
import { countriesList } from "../app/api/common/countries";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password!"]
    },
    role: {
        type: String,
        default: rolesList[1].name
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    country: {
        type: String,
        enum: countriesList,
        default: 'India'
    },
    isActive: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpire: Date,
    verifyToken: String,
    verifyTokenExpiry: Date

}, {
    timestamps: true, // adds createdAt and updatedAt
})

const User = mongoose.model("User", userSchema);

export default User;