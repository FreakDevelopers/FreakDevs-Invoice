import { Router } from "express";
import { addUser, getUser } from "../controllers/user.controller.js";

const router = Router()

router.route("/addUser").post(addUser)
router.route("/getUser").post(getUser)

export default router