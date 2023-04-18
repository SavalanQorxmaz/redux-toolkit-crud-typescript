import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCalc } from './calcSlice'
import { operation, first, equal, clean, breakSpace } from './calcSlice'
import { selectCount } from './counterSlice'
import {increment, decrement} from './counterSlice'
const Calculator = () => {

    const currentNumber = useSelector(selectCalc)
    const dispatch = useDispatch()
    const count = useSelector(selectCount)
  return (
<div className='w-full h-3/4 flex flex-col items-center' >


           <div className='border-4 border-emerald-950 w-1/4 h-12 flex items-center text-3xl mt-10 justify-evenly'>
           <button onClick={()=>dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button  onClick={()=>dispatch(increment())}>+</button>
           </div>
           <div className='calculator select-none w-64 h-80 border-black border-solid border-4 mt-10 grid grid-flow-row grid-cols-4 gap-2 p-2' >
          <div className='border-2 border-black w-full h-12 text-xl font-bold col-span-4 text-right p-1'>{currentNumber}</div>
          <div onClick={()=>dispatch(clean())} className=' border-2 border-black text-center text-xl font-bold cursor-pointer  rounded-xl'>C</div>
          <div onClick={()=>dispatch(breakSpace())} className='border-2 border-black col text-center text-xl font-bold cursor-pointer rounded-xl'>{`<-`}</div>
          <div onClick={()=>dispatch(operation('pow'))} className='border-2 border-black col text-center text-xl font-bold cursor-pointer rounded-xl'>p</div>
          <div onClick={()=>dispatch(operation('+'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer rounded-xl'>+</div>
          <div onClick={()=>dispatch(first('1'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer rounded-xl'>1</div>
          <div onClick={()=>dispatch(first('2'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer rounded-xl'>2</div>
          <div onClick={()=>dispatch(first('3'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer rounded-xl'>3</div>
          <div onClick={()=>dispatch(operation('-'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer rounded-xl'>-</div>
          <div onClick={()=>dispatch(first('4'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer rounded-xl'>4</div>
          <div onClick={()=>dispatch(first('5'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer rounded-xl'>5</div>
          <div onClick={()=>dispatch(first('6'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer rounded-xl'>6</div>
          <div onClick={()=>dispatch(operation('x'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer rounded-xl'>x</div>
          <div onClick={()=>dispatch(first('7'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer rounded-xl'>7</div>
          <div onClick={()=>dispatch(first('8'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer rounded-xl'>8</div>
          <div onClick={()=>dispatch(first('9'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer rounded-xl'>9</div>
          <div onClick={()=>dispatch(operation('/'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer rounded-xl'>/</div>
          <div onClick={()=>dispatch(operation('%'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer rounded-xl'>%</div>
          <div onClick={()=>dispatch(first('0'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer rounded-xl'>0</div>
          <div onClick={()=>dispatch(first('.'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer rounded-xl'>,</div>
          <div onClick={()=>dispatch(equal('='))} className='border-2 border-black text-center text-xl font-bold cursor-pointer rounded-xl'>=</div>


      </div>
           </div>
  )
}

export default Calculator