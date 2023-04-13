import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL

interface dataType{
    data:string[]

}

export const GET =(path:string)=>{
    return new Promise<string[]>((res)=>{
        
        res(axios.get(`${baseUrl}/`+ path)
        .then((res)=>res.data))
        
    })

}

export const POST =(path:string, data:{text:string, id:number})=>{
    return new Promise<string[]>((res)=>{
        
        res(axios.post(`${baseUrl}/`+ path, data)
        .then((res)=>res.data))
        
    })

}
export const DELETE =(path:string, id:string)=>{
    return new Promise<string[]>((res)=>{
        
        res(axios.post(`${baseUrl}/`+ path, {
            id
        })
        .then((res)=>res.data))
        
    })

}

export const UPDATE =(path:string, data:{text:string, id:string})=>{
    return new Promise<string[]>((res)=>{
        
        res(axios.post(`${baseUrl}/`+ path, {
            data
        })
        .then((res)=>res.data))
        
    })

}