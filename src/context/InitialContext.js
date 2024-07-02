import { createContext, useContext } from "react";


export const UserContext = createContext({
    name:"md ali",
    email:"rde@mail.com"
})

export const useUserContext = ()=>{
    return useContext(UserContext)
}