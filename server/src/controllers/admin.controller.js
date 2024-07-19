import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { Admin } from "../models/admin.models.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

const generateToken = admin => {
    return jwt.sign({ admin }, process.env.JWT_TOKEN_SECRET, { expiresIn: process.env.JWT_TOKEN_EXPIRY })
}

const registerAdmin = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    if (
        [username, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedAdmin = await Admin.findOne({ username })

    if (existedAdmin) {
        throw new ApiError(409, "User with email or username already exists")
    }

    const admin = await Admin.create({
        username: username.toLowerCase(),
        password
    })

    const createdAdmin = await Admin.findById(admin._id).select(
        "-password"
    )

    return res.status(201).json(
        new ApiResponse(200, createdAdmin, "User registered Successfully")
    )
})


const loginAdmin = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    // Find admin by username
    const admin = await Admin.findOne({ username });
    if (!admin) {
        throw new ApiError(404, "User does not exist");
    }

    const isPasswordValid = await admin.isPasswordCorrect(password)
    if (!isPasswordValid) {
        throw new ApiError(404, "Incorrect Password");
    }
    admin.password = undefined
    admin.updatedAt = undefined
    const data = { _id: admin._id, username }
    const token = generateToken(data)

    return res.status(201).json(
        new ApiResponse(200, { admin: data, token }, "Login Successful..!")
    )
})

export { registerAdmin, loginAdmin }