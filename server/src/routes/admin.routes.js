import { Router } from "express";
import { getAdmin, registerAdmin } from "../controllers/admin.controller.js";

const router = Router()

router.route("/signup").post(registerAdmin)
router.route("/").post(getAdmin)

export default router