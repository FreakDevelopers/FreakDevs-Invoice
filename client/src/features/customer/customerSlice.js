import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _id: "",
    userName: "",
    userEmail: "",
    userMobile: "",
}

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        setUserId: (state, action) => {
            state._id = action.payload
        },
        setUserName: (state, action) => {
            state.userName = action.payload
        },
        setUserEmail: (state, action) => {
            state.userEmail = action.payload
        },
        setUserMobile: (state, action) => {
            state.userMobile = action.payload
        },

    }
})

export const { setUserId, setUserName, setUserEmail, setUserMobile } = customerSlice.actions

export default customerSlice.reducer