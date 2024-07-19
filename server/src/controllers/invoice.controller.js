import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { Invoice } from "../models/invoice.models.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";

const createInvoice = asyncHandler(async (req, res) => {
    const { invoiceNumber, invoiceDate, amountTotal, amountPaid, balanceDue, invoiceItems, user, note } = req.body

    if ((user == "") || (invoiceNumber == "") || (invoiceDate == "") || (amountPaid == "") || (invoiceItems.length < 1)) {
        throw new ApiError(401, "All fields are required")
    }

    const invoice = await Invoice.create({
        invoiceNumber,
        invoiceDate,
        amountPaid,
        amountTotal,
        balanceDue,
        invoiceItems,
        user,
        note
    })
    try {
        const user1 = await User.findById(user)
        user1.userInvoices.push(invoice)
        user1.save()
    } catch (error) {
        throw new ApiError(402, "Error saving invoice")
    }

    const createdInvoice = await Invoice.findById(invoice._id)

    return res.status(201).json(
        new ApiResponse(200, createdInvoice, "Invoice Created Successfully")
    )
})

const getInvoiceNumber = asyncHandler(async (req, res) => {
    const latestInvoice = await Invoice.findOne().sort({ createdAt: -1 });
    if (latestInvoice == null) {
        return res.status(201).json(
            new ApiResponse(200, "INV0000", "Found Invoice Number")
        )
    }

    return res.status(201).json(
        new ApiResponse(200, latestInvoice.invoiceNumber, "Found Invoice Number")
    )
})

const getInvoices = asyncHandler(async (req, res) => {
    const allInvoices = await Invoice.find();

    return res.status(201).json(
        new ApiResponse(200, allInvoices, "Found Invoices")
    )
})

export { createInvoice, getInvoiceNumber, getInvoices }