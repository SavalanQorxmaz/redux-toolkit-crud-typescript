import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './test/counterSlice';
import calcReducer from './test/calcSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        calculator: calcReducer
    }
})

