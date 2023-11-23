import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String,
        required: true
    },
    invoiceDate: {
        type: Date,
        required: true,
    },
    balancePaid: {
        type: Number,
        required: true
    },
    balanceDue: {
        type: Number,
        required: true
    },
    items: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }
}, { timestamps: true })

export const Invoice = mongoose.model("Invoice", invoiceSchema)