import { Router } from "express";
import { addUser, getUser, getAllUsers, updateUser } from "../controllers/user.controller.js";

const router = Router()

router.route("/createCustomer").post(addUser)
router.route("/customer/:id").get(getUser)
router.route("/getAllCustomers").get(getAllUsers)
router.route("/customer/:id").put(updateUser)

export default router