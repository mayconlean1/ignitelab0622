import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Platform (){
    const stateToogleList = useState(true)
    
    const {slug} = useParams<{slug : string}>()

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