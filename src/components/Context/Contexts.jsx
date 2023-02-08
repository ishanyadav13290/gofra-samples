
import { createContext, useState } from "react";

export let AuthContext = createContext()

export default function ContextProvider({children}){
    let [isAuth, setAuth] = useState(false)
    let value={
        isAuth,
        setAuth
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}