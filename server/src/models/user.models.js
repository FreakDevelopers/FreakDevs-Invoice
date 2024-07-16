import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    userEmail: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    userMobile: {
        type: Number,
        required: true
    },
    userAddress: {
        type: String,
        required: true
    },
    userCity: {
        type: String,
        required: true
    },
    userState: {
        type: String,
        required: true
    },
    userZipCode: {
        type: String,
        required: true
    },
    userInvoices: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Invoice"
        }
    ]
}, { timestamps: true })

export const User = mongoose.model("User", userSchema)