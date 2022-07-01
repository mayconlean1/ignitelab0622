import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



export function Authenticate(){
    const navigate = useNavigate()
   
    useEffect(() => {
        const backendUrl = import.meta.env.VITE_BACKEND_URL 
        axios.post(backendUrl+'/authenticate',{
            code: localStorage.getItem('code')
        }).then(res =>{
            if(res.data.token){
                localStorage.setItem('token',res.data.token)
                navigate('/event')
            }else{
                navigate('/')
            }
        })
        
    },[])
    return(
        <>
        </>
    )
}