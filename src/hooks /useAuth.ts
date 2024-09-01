import { useEffect, useState } from "react";

export function useAuth(){
    const [isAuth, setIsAuth]=useState(false)

    useEffect(()=>{
        async function checkAuth(){
            try{
                const res= await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/apiv/checkauth`, {method:"GET",
                    headers: {
                      "Content-Type": "application/json",
                    }},)
                const data= await res.json()
            }catch(err){
                console.error(err)
            }
        }

        checkAuth()
    },[])

    return {isAuth}
}