import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    invoiceNumber: "INV0001",
}

const authSlice = createSlice({
    name: "invoice",
    initialState,
    reducers: {
        setInvoiceNumber: (state, action) => {
            state.invoiceNumber = action.payload
        },
    }
})

export const { setInvoiceNumber } = authSlice.actions

export default authSlice.reducer