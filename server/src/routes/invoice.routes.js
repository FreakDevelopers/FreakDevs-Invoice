import { Router } from "express";
import { createInvoice, getInvoiceNumber, getInvoices } from "../controllers/invoice.controller.js";

const router = Router()

router.route("/createInvoice").post(createInvoice)
router.route("/getInvoiceNumber").get(getInvoiceNumber)
router.route("/getInvoices").get(getInvoices)

export default router