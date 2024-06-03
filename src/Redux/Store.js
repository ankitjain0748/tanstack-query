import { configureStore } from "@reduxjs/toolkit"
import userReducer from './UserSlice'

const store = configureStore({
    reducer: {
        shoping: userReducer,
    }
})

export default store;