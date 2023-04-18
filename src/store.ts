import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './calculator/counterSlice';
import calcReducer from './calculator/calcSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        calculator: calcReducer
    }
})

