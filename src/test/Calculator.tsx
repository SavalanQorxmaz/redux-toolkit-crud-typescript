import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCalc } from './calcSlice'
import { operation, first, equal, clean, breakSpace } from './calcSlice'

const Calculator = () => {

    const currentNumber = useSelector(selectCalc)
    const dispatch = useDispatch()
    
  return (
      <div className='calculator w-64 h-80 border-black border-solid border-4 mt-10 grid grid-flow-row grid-cols-4 gap-4 p-2' >
          <div className='border-2 border-black w-full h-12 text-center text-xl font-bold col-span-4 text-right p-1'>{currentNumber}</div>
          <div onClick={()=>dispatch(clean())} className=' border-2 border-black text-center text-xl font-bold cursor-pointer'>C</div>
          <div onClick={()=>dispatch(equal('='))} className='border-2 border-black col text-center text-xl font-bold cursor-pointer'>=</div>
          <div className='border-2 border-black col text-center text-xl font-bold cursor-pointer'>%</div>
          <div onClick={()=>dispatch(operation('+'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer'>+</div>
          <div onClick={()=>dispatch(first('1'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer'>1</div>
          <div onClick={()=>dispatch(first('2'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer'>2</div>
          <div onClick={()=>dispatch(first('3'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer'>3</div>
          <div onClick={()=>dispatch(operation('-'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer'>-</div>
          <div onClick={()=>dispatch(first('4'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer'>4</div>
          <div onClick={()=>dispatch(first('5'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer'>5</div>
          <div onClick={()=>dispatch(first('6'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer'>6</div>
          <div onClick={()=>dispatch(operation('x'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer'>x</div>
          <div onClick={()=>dispatch(first('7'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer'>7</div>
          <div onClick={()=>dispatch(first('8'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer'>8</div>
          <div onClick={()=>dispatch(first('9'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer'>9</div>
          <div onClick={()=>dispatch(operation('/'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer'>/</div>
          <div onClick={()=>dispatch(operation('%'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer'>%</div>
          <div onClick={()=>dispatch(first('0'))} className='border-2 border-black text-center text-xl font-bold cursor-pointer'>0</div>
          <div className='border-2 border-black text-center text-xl font-bold cursor-pointer'>,</div>
          <div onClick={()=>dispatch(breakSpace())} className='border-2 border-black text-center text-xl font-bold cursor-pointer'>{`<-`}</div>


      </div>
  )
}

export default Calculator