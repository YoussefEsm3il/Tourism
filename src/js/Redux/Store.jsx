import { configureStore } from "@reduxjs/toolkit";
import { TicketSlice } from "./TicketSlice";

const Store = configureStore({
    reducer:{
        Ticket: TicketSlice.reducer
    }
})

export default Store