import { configureStore } from "@reduxjs/toolkit";
import { contactSlice } from "./contacts/contactSlice";

export const store = configureStore({
    reducer: {
        contact: contactSlice.reducer
    },
})