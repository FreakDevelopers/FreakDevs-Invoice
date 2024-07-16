import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.models.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const addUser = asyncHandler(async (req, res) => {
    const { userName, userEmail, userMobile, userAddress, userCity, userState, userZipCode } = req.body

    if (
        [userName, userEmail, userMobile, userAddress, userCity, userState, userZipCode].some(field => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({ userEmail })

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists")
    }

    const user = await User.create({
        userName, userEmail, userMobile, userAddress, userCity, userState, userZipCode
    })

    const createdUser = await User.findById(user._id)

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User Added Successfully")
    )
})


const getUser = asyncHandler(async (req, res) => {
    const { userName, userEmail } = req.body
    const user = await User.findOne({ userName, userEmail })
    if (user == null) {
        throw new ApiError(404, "User not found..!")
    }

    return res.status(201).json(
        new ApiResponse(200, user, "User found..!")
    )
})

export { addUser, getUser }