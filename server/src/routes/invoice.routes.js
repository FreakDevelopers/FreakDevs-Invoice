import { Router } from "express";
import { createInvoice, getInvoiceNumber, getInvoices } from "../controllers/invoice.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = Router()
// router.use(isAuthenticated) // Apply verifyJWT middleware to all routes in this file
router.route("/createInvoice").post(isAuthenticated, createInvoice)
router.route("/getInvoiceNumber").get(isAuthenticated, getInvoiceNumber)
router.route("/getInvoices").get(isAuthenticated, getInvoices)

export default router