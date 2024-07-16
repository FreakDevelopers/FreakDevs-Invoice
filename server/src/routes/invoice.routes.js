import { Router } from "express";
import { createInvoice } from "../controllers/invoice.controller.js";

const router = Router()

router.route("/createInvoice").post(createInvoice)

export default router