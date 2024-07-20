import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    invoiceNumber: "",
    invoiceDate: new Date().toISOString().substring(0, 10),
    amountPaid: "",
    amountTotal: 0,
    balanceDue: 0,
    user: "",
    note: "",
    invoiceItems: [],
}

const invoiceSlice = createSlice({
    name: "invoice",
    initialState,
    reducers: {
        setInvoiceNumber: (state, action) => {
            state.invoiceNumber = action.payload
        },
        setInvoiceDate: (state, action) => {
            state.invoiceDate = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        setNote: (state, action) => {
            state.note = action.payload
        },
        setAmountPaid: (state, action) => {
            state.amountPaid = parseInt(action.payload)
            state.balanceDue = state.amountTotal - state.amountPaid
        },
        setAmountTotal: (state, action) => {
            state.amountPaid = parseInt(action.payload)
        },
        setInvoiceItems: (state, action) => {
            state.invoiceItems = action.payload
        },
        addInvoiceItems: (state, action) => {
            state.invoiceItems.push(action.payload)
            state.amountTotal = state.invoiceItems.map((i) => i.amount).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            state.balanceDue = state.amountTotal - state.amountPaid
        },
    }
})

export const { setInvoiceNumber, addInvoiceItems, setInvoiceDate, setUser, setNote, setAmountPaid, setInvoiceItems, setAmountTotal } = invoiceSlice.actions

export default invoiceSlice.reducer