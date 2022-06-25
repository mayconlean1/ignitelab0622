import { createContext, ReactNode, useState } from "react";

interface toggleContextType{
    toogle:boolean,
    setToogle: (newState: boolean) => void
}

const initialValue = {
    toogle: false,
    setToogle: ()=>{}
}

export const toogleListContext = createContext<toggleContextType>(initialValue)


interface UserContextProps {
    children: ReactNode
}

export const toogleContextProvider = ({children}:UserContextProps) =>{
    const [toogle, setToogle] = useState(false)

    return (
        <toogleListContext.Provider value={{toogle, setToogle}}>
            {children}
        </toogleListContext.Provider>
    )
}