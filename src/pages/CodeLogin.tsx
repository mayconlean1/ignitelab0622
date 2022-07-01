import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom"

export function CodeLogin(){
    
    const [searchParams, setSearchParams] = useSearchParams();
    const code = searchParams.get("code")
    
    localStorage.setItem('code', code? code : '')

    const navigate = useNavigate()
    useEffect(() => {
        navigate('/authenticate')
    })

    return(
        <>
        </>
    )
}