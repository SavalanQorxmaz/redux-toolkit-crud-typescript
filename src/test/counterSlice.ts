
import {createSlice, Action} from'@reduxjs/toolkit';

const initialState = {
    count: 0
}

const counterSlice  = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        } 
    }

})

export const  selectCount = (state:{counter:{count:number}}) => state.counter.count;


export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer