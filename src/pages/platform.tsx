import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Platform (){
    const {slug} = useParams<{slug : string}>()
    console.log('slug :>> ', slug);
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
               {slug?  <Video lessonSlug= {slug}/> : <Video lessonSlug="abertura" />}
                <Sidebar />
            </main>
        </div>
            
    )
}