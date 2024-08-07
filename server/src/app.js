import express from "express"
import cors from "cors"

const app = express()

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))

// routtees import
import adminRouter from "./routes/admin.routes.js"
import userRouter from "./routes/user.routes.js"
import invoiceRouter from "./routes/invoice.routes.js"

// routes declaration
app.use("/", adminRouter)
app.use("/", userRouter)
app.use("/", invoiceRouter)

export { app }