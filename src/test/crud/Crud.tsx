import React, {useState, useEffect} from 'react'
import {GET, POST, DELETE, UPDATE} from '../../methods'



const Crud = () => {

    const [dataArray, setDataArray] = useState<string[]>([])
    const [flag, setFlag] = useState<boolean>(false)
    const [methodGet, setMethodGet] = useState(true)
    const [methodPost, setMethodPost] = useState(false)
    const [methodUpdate, setMethodUpdate] = useState(false)
    const [methodDelete, setMethodDelete] = useState(false)
    const [getInputValue, setGetInputValue] = useState<string>('')
    const [method, setMethod] = useState<'get' | 'post' | 'update' | 'delete' | ''>('')
    const [arrayLength, setArrayLength] = useState(0)
  
// datanin goturulmesi
   useEffect(()=>{
    GET('getArray')
    .then((res)=>{
        setDataArray(res)
       setMethodGet(true)
        
        setArrayLength(dataArray.length)
        return res
    })
    
    
   }, [flag])

 

//    data gondermek

const postData = ()=>{
   POST('postData', {text:getInputValue, id:arrayLength})
   .then(res=>{
    setFlag(!flag)
    setMethodPost(false)
    console.log(res)})
}

const deleteData = (e:any) =>{
console.log(e.target.parentNode.id)
DELETE('deleteData',  e.target.parentNode.id )
.then(res=>{
    setFlag(!flag)
    setMethodDelete(false)
})

}

const updateData = (e:any)=>{
UPDATE('updateData',{text:getInputValue, id:e.target.parentNode.id})
.then(res=>{
    setFlag(!flag)
    setMethodUpdate(false)
})
}

//    methoda gore gosterilecek forma funksiyasi


const getMethodF = ()=>{
    setMethodGet(true)
    setMethodDelete(false)
    setMethodPost(false)
    setMethodUpdate(false)
}
const postMethodF = ()=>{
    setMethodGet(false)
    setMethodDelete(false)
    setMethodPost(true)
    setMethodUpdate(false)
}
const updateMethodF = ()=>{
    setMethodGet(false)
    setMethodDelete(false)
    setMethodPost(false)
    setMethodUpdate(true)
}
const deleteMethodF = ()=>{
    setMethodGet(false)
    setMethodDelete(true)
    setMethodPost(false)
    setMethodUpdate(false)
}
 


  return (
    <div className='border-2 border-black w-4/5 m-auto h-96 flex flex-col p-2 overflow-y-auto relative'>
        <div className='flex justify-evenly  text-2xl font-bold bg-gray-400 [&>*]:p-lr-3 [&>*]:rounded-xl [&>*:hover]:text-red-900 [&>*:hover]:cursor-pointer'>
        <div onClick={getMethodF}>GET</div>
            <div onClick={postMethodF} className=''>POST</div>
            <div onClick={updateMethodF}>UPDATE</div>
            <div onClick={deleteMethodF}>DELETE</div>
          
            
        </div>
    
  
   {
    methodGet? <>
    {dataArray.map((item, index)=>(
        <div key={index+1} className='select-none border-2 border-black-800 mt-1 p-2 '>
            
            <span>{item}</span>
            
        </div>))}
</> : ''
   }
        {
            methodPost ? <>
            <div  className='select-none border-2 border-green-800 mt-1 p-2 '>
                          <input onChange={
                              (e)=>{
                                  setGetInputValue(e.target.value)
                                 
                              }
                      } 
                      placeholder='new item' type="text"/>
                          <span onClick={postData} className='float-right mr-4 font-bold cursor-pointer '>Add</span>
                      </div>
          {dataArray.map((item, index)=>(
              <div  key={index+1} className='select-none border-2 border-black-800 mt-1 p-2 '>
                  
                  <span>{item}</span>
                  
              </div>))}
      </> : ''
        }

        {
            methodUpdate ? <>
            {
            dataArray.map((item, index)=>(
                <div id={index.toString()} key={index+1} className='select-none border-2 border-green-800 mt-1 p-2 '>
                    <input onChange={(e)=>{setGetInputValue(e.target.value); console.log(getInputValue)}} defaultValue={item} type="text"/>
                    <span onClick={updateData} className='float-right mr-4 font-bold cursor-pointer '>update</span>
                </div>
            ))
        }
        </> : ''
        }
     {
        methodDelete ? <>
        {
        dataArray.map((item, index)=>(
            <div id={index.toString()}  key={index+1} className='select-none border-2 border-green-800 mt-1 p-2 '>
                 <span>{item}</span>
                <span onClick={deleteData}  className='float-right mr-4 font-bold cursor-pointer '>delete</span>
            </div>
        ))
    }
    </> : ''
     }
    
        

    </div>
  )
}

export default Crud