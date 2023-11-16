import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: StorageManager,
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
    state:  {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    note: {
        type: String
    },
    items: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }
}, { timestamps: true })

export const Invoice = mongoose.model("Invoice", invoiceSchema)