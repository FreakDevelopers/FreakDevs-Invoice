import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
    },
    email: {
        type: StorageManager,
        unique: true,
        required: true,
        lowercase: true
    },
    mobile: {
        type: Number,
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    invoices: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Invoice'
    }
}, { timestamps: true })

export const User = mongoose.model("User", userSchema)