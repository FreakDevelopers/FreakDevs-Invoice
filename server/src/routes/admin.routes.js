import { Router } from "express";
import { getAdmin, registerAdmin } from "../controllers/admin.controller.js";

const router = Router()

// router.route("/register").post(registerAdmin)
router.route("/").get(getAdmin)

export default router