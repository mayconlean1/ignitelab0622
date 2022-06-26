import { List, X } from "phosphor-react";
import { Logo } from "./Icon";
import {toogleContextProvider} from '../contexts/toggleListContext'

interface HeaderProps {
    stateToogleList: [boolean, (newState:boolean)=>void]
}

export function Header (props:HeaderProps){
    const [toogleState, setToogleList] = props.stateToogleList

    function toogleList(){
        setToogleList(!toogleState)
    }

    return(
        <header 
            className="w-full py-5 flex items-center  bg-gray-700 border-b border-gray-600 justify-evenly sm:p-4 mx-4">
                <Logo />
            <div 
                className="cursor-pointer sm:hidden flex items-center gap-2 mx-4 pr-4"
                onClick={toogleList}
                    
            >
                Aulas 
                 {toogleState?<List color='#81D8F7' size={32}/> :<X color='#81D8F7' size={32}/> } 
            </div>
        </header>
        
    )
}