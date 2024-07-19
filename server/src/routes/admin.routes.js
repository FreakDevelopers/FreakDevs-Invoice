import { Router } from "express";
import { loginAdmin, registerAdmin } from "../controllers/admin.controller.js";

const router = Router()

router.route("/signup").post(registerAdmin)
router.route("/login").post(loginAdmin)

export default router