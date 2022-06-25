import { List } from "phosphor-react";
import { Logo } from "./Icon";

export function Header (){
    return(
        <header 
            className="w-full py-5 flex items-center  bg-gray-700 border-b border-gray-600 justify-evenly sm:p-4">
                <Logo />
            <div 
                className="sm:hidden flex items-center gap-2"    
            >
                Aulas 
                <List size={24}/>
            </div>
        </header>
        
    )
}