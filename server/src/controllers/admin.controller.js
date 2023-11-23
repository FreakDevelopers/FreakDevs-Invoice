import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { Admin } from "../models/admin.models.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const registerAdmin = asyncHandler(async (req, res) => {
    const { username, password } = req.body
    // console.log("username: ", username);

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
    const { username, password } = await Admin.findOne()
    const admin = { username, password }
    return res.status(201).json(
        new ApiResponse(200, admin, "Admin Found..!")
    )
})

export { registerAdmin, getAdmin }