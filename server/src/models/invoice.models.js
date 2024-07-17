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
    invoceItems: {
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