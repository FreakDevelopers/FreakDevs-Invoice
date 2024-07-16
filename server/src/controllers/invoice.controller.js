import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { Invoice } from "../models/invoice.models.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";

const createInvoice = asyncHandler(async (req, res) => {
    const { invoiceNumber, invoiceDate, balancePaid, balanceDue, invoceItems, user } = req.body

    if (
        [invoiceNumber, invoiceDate, balancePaid, balanceDue, invoceItems, user].some((field) => field == ("" || null || [] || undefined))
    ) {
        throw new ApiError(400, "All fields are required")
    }

    // const existedAdmin = await Admin.findOne({ username })

    // if (existedAdmin) {
    //     throw new ApiError(409, "User with email or username already exists")
    // }

    const invoice = await Invoice.create({
        invoiceNumber,
        invoiceDate,
        balancePaid,
        balanceDue,
        invoceItems,
        user
    })

    const user1 = await User.findById(user)
    user1.userInvoices.push(invoice)
    user1.save()

    const createdInvoice = await Invoice.findById(invoice._id)

    return res.status(201).json(
        new ApiResponse(200, createdInvoice, "User registered Successfully")
    )
})


// const getAdmin = asyncHandler(async (req, res) => {
//     const { username, password } = req.body
//     const admin = await Admin.findOne({ username, password })
//     if (admin == null) {
//         throw new ApiError(404, "Incorrect Credentials..!")
//     }

//     return res.status(201).json(
//         new ApiResponse(200, admin, "Login Successful..!")
//     )
// })

export { createInvoice }