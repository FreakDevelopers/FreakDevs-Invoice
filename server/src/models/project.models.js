import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: [true, 'projectName is required']
    },
    startDate: {
        type: Date,
        required: [true, 'startDate is required']
    },
    deployDate: {
        type: Date,
        required: [true, 'deployDate is required']
    },
    invoices: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Invoice"
    }
}, { timestamps: true })

export const Project = mongoose.model("Project", projectSchema)