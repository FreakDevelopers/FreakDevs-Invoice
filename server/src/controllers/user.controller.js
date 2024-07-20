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
        new ApiResponse(200, createdUser, "Customer Created Successfully")
    )
})

const getUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    const user = await User.findOne({ _id: id }).populate("userInvoices")
    if (user == null) {
        throw new ApiError(404, "User not found..!")
    }

    return res.status(201).json(
        new ApiResponse(200, user, "User found..!")
    )
})

const getAllUsers = asyncHandler(async (req, res) => {
    const allUser = await User.find()
    if (allUser.length < 1) {
        throw new ApiError(404, "Users not found..!")
    }

    return res.status(201).json(
        new ApiResponse(200, allUser, "User found..!")
    )
})

const updateUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { userName, userEmail, userMobile, userAddress, userCity, userState, userZipCode } = req.body
    const oldEmail = await User.findById(id)

    if (!(oldEmail.userEmail == userEmail)) {
        const emailTaken = await User.findOne({ userEmail })
        if (emailTaken) {
            throw new ApiError(400, "Email Taken Already..!")
        }
    }
    const user = await User.findByIdAndUpdate(id, { userName, userEmail, userMobile, userAddress, userCity, userState, userZipCode })

    return res.status(201).json(
        new ApiResponse(200, user, "User found..!")
    )
})

export { addUser, getUser, getAllUsers, updateUser }