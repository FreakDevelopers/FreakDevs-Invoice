import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
}, { timestamps: true })

adminSchema.pre("save", async function (next) {
    if (!(this.isModified("password"))) return next();
    this.password = await bcrypt.hash(this.password, 10)
    // console.log(this.password);
    next()
})

adminSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

export const Admin = mongoose.model("Admin", adminSchema)