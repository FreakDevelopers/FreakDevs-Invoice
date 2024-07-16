import { Router } from "express";
import { addUser, getUser, getAllUsers, updateUser } from "../controllers/user.controller.js";

const router = Router()

router.route("/addUser").post(addUser)
router.route("/users/:id").get(getUser)
router.route("/getAllUsers").get(getAllUsers)
router.route("/users/:id").put(updateUser)

export default router