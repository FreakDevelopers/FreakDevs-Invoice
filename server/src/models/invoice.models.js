import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})

const invoiceSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String,
        required: true,
        unique: true
    },
    invoiceDate: {
        type: Date,
        required: true,
    },
    amountPaid: {
        type: Number,
        required: true
    },
    amountTotal: {
        type: Number,
        required: true
    },
    balanceDue: {
        type: Number,
        required: true
    },
    invoiceItems: {
        type: [itemSchema],
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    note: {
        type: String,
    }
}, { timestamps: true })

export const Invoice = mongoose.model("Invoice", invoiceSchema)