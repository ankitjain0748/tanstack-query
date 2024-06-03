import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({
    name: "shoping",
    initialState: {
      shopping: [],
    },
    reducers: {
        Reduxshpoingcart(state, action) {
           state.Reduxshpoingcart =action.payload
        },
    }
})

export const { Reduxshpoingcart } = UserSlice.actions;
export const selectuser = (state) => state.shoping.shopping;
export default UserSlice.reducer;
