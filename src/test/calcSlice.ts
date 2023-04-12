import { createSlice } from "@reduxjs/toolkit";


interface calcType {
    operand1:string,
    operand2:string,
    operator: string,
    result: string,
    screen: string,
    equal:boolean,
}

const initialState:calcType = {
    operand1: '',
    operand2: '',
    operator: '',
    result: '',
    screen: '',
    equal: false,
}

        const returnResult = (state:calcType, act:string):string=>{
            if(state.operator === ''){
               
                if(state.result !== ''){
                    state.operand1 = state.result;
                    state.result = '';
                }else{
                    state.operand1 = '0';
                    state.screen = '0'
                    state.result = ''; 
                }
                state.screen += act
                state.operator = act
               

            }
            else{
                state.operand2 = state.result;
                switch(state.operator){
                    case '+' : state.result = (Number(state.operand1) + Number(state.operand2)).toString();
                    break;
                    case '-' : state.result = (Number(state.operand1) - Number(state.operand2)).toString();
                    break;
                    case 'x' : state.result = (Number(state.operand1) * Number(state.operand2)).toString();
                    break;
                    case '/' : {
                       
                            state.result = (Number(state.operand1) / Number(state.operand2)).toString();
                    };
                       
                    break;
                    case 'pow' : state.result = (Number(state.operand1) ** Number(state.operand2)).toString();
                    break;
                    case '%' : state.result = (Number(state.operand1) /100 * Number(state.operand2)).toString();
                    break;
                 
                    default: state.result = ''
                }

                if(!isNaN(Number(state.result))){
                    state.operand1 = state.result;
                    state.operator = act
                state.operand2 = '';
                state.screen = state.result + act
                state.result = ''
                }
                else{
                    state.operand1 = ''
                    state.operand2 = ''
                    state.result = ''
                    state.operator = ''
                    state.screen = '0-a bolme'
                }
           
        
            } 
            

            return state.result
        
        }


const calcSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {

        inputNumber: (state, action)=> {
            state.result = action.payload
        },

        operation: (state, action)=>{
         returnResult(state, action.payload)
        },

        first: (state, action)=>{
            state.result += action.payload
            state.screen = state.operand1+ state.operator+ state.result
        },
        equal: (state, action)=>{
            returnResult(state, action.payload);
            state.screen = state.operand1
            state.result = state.operand1
            state.operator = ''
        },
        clean: (state) => {
             state.result = '';
             state.operand1 = '';
             state.operator = ''
             state.screen = ''
            
        },
        breakSpace: (state) => {
            state.result = state.result.slice(0,state.result.length-1)
            state.screen = state.operand1+ state.operator+ state.result
        }
    }
})


export const {operation, first, equal, clean, breakSpace} = calcSlice.actions;
export const selectCalc = (state:{calculator:{screen:string}}) => state.calculator.screen

export default calcSlice.reducer