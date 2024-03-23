import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[]
}
export const TicketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers:{
        addToTicket:(state,action)=>{
            state.items.push(action.payload)
            console.log(state.items)
        }
    }
})