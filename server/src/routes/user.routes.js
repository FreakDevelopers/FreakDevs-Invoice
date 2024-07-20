import { Router } from "express";
import { addUser, getUser, getAllUsers, updateUser } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js"

const router = Router()
// router.use(isAuthenticated) // Apply verifyJWT middleware to all routes in this file
router.route("/createCustomer").post(isAuthenticated,addUser)
router.route("/getCustomer/:id").get(isAuthenticated, getUser)
router.route("/getAllCustomers").get(isAuthenticated, getAllUsers)
router.route("/customer/:id").put(isAuthenticated, updateUser)

export default router