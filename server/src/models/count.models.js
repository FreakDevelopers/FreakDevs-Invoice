import mongoose from "mongoose";

const countSchema = new mongoose.Schema({
    count: {
        type: String
    }
}, { timestamps: true })

export const Count = mongoose.model("Count", countSchema)