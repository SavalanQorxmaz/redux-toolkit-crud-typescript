import axios from 'axios'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { selectCount } from './counterSlice'
import {increment, decrement} from './counterSlice'
import Calculator from './Calculator'

const dataUrl = process.env.REACT_APP_BASE_URL

const Testpage = () => {
 useEffect(()=>{
   
  axios.get(`${dataUrl}`)
  .then(res=>res.data)
  .then(res=>console.log(res))

 }, [])


  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  return (
    <div className='test-page w-full h-3/4 flex flex-col items-center' >
      <h1 className="text-3xl font-bold underline">
              Tailwind isleyir!
            </h1>

           <div className='border-4 border-emerald-950 w-10/12 h-12 flex items-center text-3xl mt-10 justify-evenly'>
           <button onClick={()=>dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button  onClick={()=>dispatch(increment())}>+</button>
           </div>

           <Calculator/>
    </div>
  )
}

export default Testpage