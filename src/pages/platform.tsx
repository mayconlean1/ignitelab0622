import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Platform (){
    const stateToogleList = useState(true)
    
    const {slug} = useParams<{slug : string}>()

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const urlVerifyToken = backendUrl? backendUrl+'/verifyToken' : ''

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token') 
        axios.post(urlVerifyToken,{
            token 
        }).then(res=>{
            console.log(res.data.tokenStatus );
            if(res.data.tokenStatus){



                
            }else{
                console.log('else');
                navigate ('/')
                localStorage.setItem('token', '')
            }
        })

        if (slug === undefined){
            navigate('/event/lesson/abertura')
        }
            
    },[])

    return(
        <div className="flex flex-col min-h-screen">
            <Header stateToogleList= {stateToogleList}/>
            <main className="flex flex-1 justify-center">
               {slug?  
               <Video stateToogleList= {stateToogleList} lessonSlug= {slug}/> 
               : 
               <Video stateToogleList= {stateToogleList} lessonSlug="abertura" />}
                <Sidebar  stateToogleList= {stateToogleList} />
            </main>
        </div>
            
    )
}