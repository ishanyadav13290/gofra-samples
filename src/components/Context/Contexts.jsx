
import { createContext, useState } from "react";

export let AuthContext = createContext()

export default function ContextProvider({children}){
    let [isAuth, setAuth] = useState(false)
    let [cart,setCart] = useState([])
    let [userName, setUserName]= useState("")
    let value={
        isAuth,
        setAuth,
        cart,
        setCart,
        userName, 
        setUserName
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}