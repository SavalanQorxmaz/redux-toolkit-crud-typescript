import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './test/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

