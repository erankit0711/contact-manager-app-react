import { createSlice } from "@reduxjs/toolkit";
import contactList from "../../Utils/contactList";

const initialState = {
    value: contactList,
}

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact: (state, action) =>{
            state.value.push(action.payload);
        },
        deleteContact: (state, action) =>{
            console.log(state.value);
            state.value = state.value.filter(contact => contact.email !== action.payload);
        }
    }
})

export const {addContact, deleteContact} = contactSlice.actions;

export default contactSlice.reducer;