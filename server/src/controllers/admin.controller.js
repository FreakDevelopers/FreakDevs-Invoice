import bcrypt from "bcrypt"
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { Admin } from "../models/admin.models.js"
import { ApiResponse } from "../utils/ApiResponse.js";

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


const getAdmin = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    // Find admin by username
    const admin = await Admin.findOne({ username });
    if (!admin) {
        throw new ApiError(404, "Incorrect Username..!");
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
        throw new ApiError(404, "Incorrect Password..!");
    }
    admin.password = undefined;

    return res.status(201).json(
        new ApiResponse(200, admin, "Login Successful..!")
    )
})

export { registerAdmin, getAdmin }