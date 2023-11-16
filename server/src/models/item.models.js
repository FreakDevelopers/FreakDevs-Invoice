import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    rate: {
        type: Number,
        required: [true, 'Rate is required']
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required']
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required']
    }
},{timestamps: true})

export const Item = mongoose.model("Item", itemSchema)