import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"
import invoiceReducer from "../features/invoice/invoiceSlice"
import customerReducer from "../features/customer/customerSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        invoice: invoiceReducer,
        customer: customerReducer,
    }
})